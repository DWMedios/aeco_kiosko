const cron = require('node-cron')

const { createLog } = require('../repositories/updateRepository')
const {
    findAll,
    update,
    findAllToDay,
} = require('../repositories/ticketRepository')
const { getById, updateCompany } = require('../repositories/companyRepository')
const { UPDATE_TYPES } = require('../enums/update')

const { fetchFromApi } = require('../utils/fetchHelper')
const {
    getLastCapacity,
    createCapacities,
    //   getLastProduct,
    createProducts,
} = require('../repositories/productRepository')
const {
    saveDailyStats,
    savePackagingStats,
    saveProductStats,
    findAllDailyStats,
    findAllPackagingStat,
    findAllProductStat,
    updateDailyStats,
    updatePackagingStat,
    updateProductStat,
} = require('../repositories/statsRepository')
const { updateRewards } = require('../repositories/rewardRepository')
const { encryptStr } = require('../utils/crypto')

let cronJob = null
let xApiKey = null

exports.startCronJobUpload = async () => {
    uploadData()
    if (cronJob === null) {
        cronJob = cron.schedule('*/10 * * * *', async () => {
            console.log('~ Upload --- JOB ---')
            const isActive = await uploadData()
            if (isActive) {
                stopCronJob()
            }
        })
        console.log('Cron job iniciado.')
    }
}

const stopCronJob = () => {
    if (cronJob) {
        cronJob.stop()
        cronJob = null
        console.log('Cron job detenido.')
    }
}

const uploadData = async () => {
    const newLog = { type: UPDATE_TYPES.UPLOAD }
    try {
        const aeco = await getById()
        if (aeco) {
            const { serialNumber } = aeco.dataValues
            xApiKey = encryptStr(serialNumber)
            const aecoStatus = await fetchFromApi(
                '/aecos/access-control',
                'GET',
                null,
                xApiKey
            )
            if (aecoStatus && aecoStatus.success) {
                await updateCompany(aeco.id, { metadata: { active: true } })
            } else {
                return false
            }
            const tickets = await findAllToDay()
            await uploadTickets()
            await uploadDailyStats(tickets)
            await uploadProductStats(tickets)
            await uploadPackagingStats(tickets)
            await getCapacitiesAfterLast()
            await getProductsAfterLast()
            await getRewardsServer()
            await createLog({ ...newLog, message: 'synchronized susccefully' })
        }
        // return true
    } catch (error) {
        await createLog({
            ...newLog,
            status: false,
            message: 'Error en sincornizacion de maquina: ' + error.message,
        })
        console.error('Error:', error)
        return false
    }
}

const uploadTickets = async () => {
    const tickets = await findAll()
    if (tickets.length === 0) {
        await createLog({
            type: UPDATE_TYPES.UPLOAD,
            message: 'No tickets to upload',
        })
        return
    }
    const newLogBase = { type: UPDATE_TYPES.UPLOAD }
    const BATCH_SIZE = 10

    // Función para dividir el array en lotes
    const createBatches = (arr, size) => {
        const batches = []
        for (let i = 0; i < arr.length; i += size) {
            batches.push(arr.slice(i, i + size))
        }
        return batches
    }

    const batches = createBatches(tickets, BATCH_SIZE)

    for (let i = 0; i < batches.length; i++) {
        const batch = batches[i]
        const newLog = {
            ...newLogBase,
            message: `Upload tickets batch #${i + 1}`,
        }

        const payload = {
            tickets: batch.map((ticket) => ({
                folio: ticket.folio,
                method: ticket.method,
                summary: {
                    reward: {
                        type: ticket.summary.reward.type,
                        name: ticket.summary.reward.name,
                    },
                },
                totalCans: ticket.total_cans,
                totalBottles: ticket.total_bottles,
                items: ticket.summary.items,
                createdAt: ticket.createdAt,
            })),
        }

        try {
            await fetchFromApi('/aecos/upload-tickets', 'POST', payload, xApiKey)
            await createLog({ ...newLog, status: true })

            // Actualizar los tickets del batch como sincronizados
            for (const ticket of batch) {
                await update(ticket.id, { synchronized: true })
            }
        } catch (error) {
            await createLog({
                ...newLog,
                status: false,
                message: `Error Upload tickets: ${error.message}`,
            })
        }
    }
}

const uploadDailyStats = async (tickets) => {
    const newLog = { type: UPDATE_TYPES.UPLOAD }
    try {
        if (tickets.length > 0) {
            let totalBottles = 0
            let totalCans = 0
            tickets.forEach((ticket) => {
                totalBottles += ticket.total_bottles || 0
                totalCans += ticket.total_cans || 0
            })

            await saveDailyStats({
                total_tickets: tickets.length,
                total_bottles: totalBottles,
                total_cans: totalCans,
            })
        }
        const stats = await findAllDailyStats()

        if (stats.length > 0) {
            for (const stat of stats) {
                await fetchFromApi(
                    '/aecos/upload-daily-stats',
                    'POST',
                    {
                        totalTickets: stat.total_tickets,
                        totalBottles: stat.total_bottles,
                        totalCans: stat.total_cans,
                        createdAt: stat.createdAt,
                    },
                    xApiKey
                )
                await updateDailyStats(stat.id)
            }
            await createLog({ ...newLog, message: 'Upload daily stats' })
        }
    } catch (error) {
        await createLog({
            ...newLog,
            status: false,
            message: 'Error Upload daily stats: ' + error.message,
        })
    }
}

const uploadProductStats = async (tickets) => {
    const newLog = { type: UPDATE_TYPES.UPLOAD }
    try {
        const productStats = {}

        if (tickets.length > 0) {
            tickets.forEach((ticket) => {
                const createdAt = ticket.createdAt
                ticket.summary.items.forEach((item) => {
                    if (!productStats[item.productId]) {
                        productStats[item.productId] = {
                            totalCount: 0,
                            createdAt,
                        }
                    }
                    productStats[item.productId].totalCount += item.quantity
                })
            })

            const transformedStats = Object.entries(productStats).map(
                ([productId, data]) => ({
                    product_id: parseInt(productId),
                    total_count: data.totalCount,
                })
            )

            for (const stat of transformedStats) {
                await saveProductStats(stat)
            }
        }

        const stats = await findAllProductStat()
        if (stats.length > 0) {
            await fetchFromApi(
                '/aecos/upload-product-stats',
                'POST',
                {
                    stats: stats.map((item) => ({
                        productId: parseInt(item.product_id),
                        totalCount: item.total_count,
                        createdAt: item.createdAt,
                    })),
                },
                xApiKey
            )
            for (const stat of stats) {
                await updateProductStat(stat.id)
            }
            await createLog({ ...newLog, message: 'Upload product stats' })
        }
    } catch (error) {
        await createLog({
            ...newLog,
            status: false,
            message: 'Upload product stats: ' + error.message,
        })
    }
}

const uploadPackagingStats = async (tickets) => {
    const newLog = { type: UPDATE_TYPES.UPLOAD }
    try {
        if (tickets.length > 0) {
            let totalBottles = 0
            let totalCans = 0
            tickets.forEach((ticket) => {
                totalBottles += ticket.total_bottles || 0
                totalCans += ticket.total_cans || 0
            })
            await savePackagingStats({
                packaging_type: 'bottle',
                total_count: totalBottles,
            })
            await savePackagingStats({
                packaging_type: 'can',
                total_count: totalCans,
            })
        }

        const stats = await findAllPackagingStat()
        if (stats.length > 0) {
            const uploads = stats.map((item) => ({
                packagingType: item.packaging_type,
                totalCount: item.total_count,
                createdAt: item.createdAt,
            }))
            await fetchFromApi(
                '/aecos/upload-packaging-stats',
                'POST',
                {
                    stats: uploads,
                },
                xApiKey
            )
            for (const stat of stats) {
                await updatePackagingStat(stat.id)
            }
            await createLog({ ...newLog, message: 'Upload packaging stats' })
        }
    } catch (error) {
        await createLog({
            ...newLog,
            status: false,
            message: 'Error Upload packaging stats: ' + error.message,
        })
    }
}

const getCapacitiesAfterLast = async () => {
    const newLog = { type: UPDATE_TYPES.UPDATE }
    try {
        const capacity = await getLastCapacity()
        const data = await fetchFromApi(
            `/products/capacities/after-last?lastId=${capacity.dataValues.id}`,
            'GET',
            null,
            xApiKey
        )
        if (data.error) throw data
        if (data.length > 0) await createCapacities(data)
        await createLog({ ...newLog, message: 'Update capacities after last' })
    } catch (error) {
        await createLog({
            ...newLog,
            status: false,
            message: 'Error Update capacities: ' + error.message,
        })
    }
}

// Este se comentó porque se aplicara un update or insert para los productos
// const getProductsAfterLast = async () => {
//     const newLog = { type: UPDATE_TYPES.UPDATE }
//     try {
//         const product = await getLastProduct()
//         const data = await fetchFromApi(
//             `/products/after-last?lastId=${product.dataValues.id}`,
//             'GET', null, xApiKey
//         )
//         if (data.error) throw data

//         if (data.length > 0) await createProducts(data)
//         await createLog({ ...newLog, message: 'Update products after last' })
//     } catch (error) {
//         await createLog({
//             ...newLog,
//             status: false,
//             message: 'Error Update products: ' + error.message,
//         })
//     }
// }

const getProductsAfterLast = async () => {
    const newLog = { type: UPDATE_TYPES.UPDATE }
    try {
        const data = await fetchFromApi(
            `/products/after-last?lastId=0`,
            'GET',
            null,
            xApiKey
        )
        if (data.error) throw data

        if (data.length > 0) await createProducts(data)
        await createLog({ ...newLog, message: 'Update products after last' })
    } catch (error) {
        await createLog({
            ...newLog,
            status: false,
            message: 'Error Update products: ' + error.message,
        })
    }
}

const getRewardsServer = async () => {
    const newLog = { type: UPDATE_TYPES.UPDATE }
    try {
        const data = await fetchFromApi('/aecos/rewards', 'GET', null, xApiKey)
        if (data.error) throw data
        if (data.rewards.length > 0) await updateRewards(data.rewards)
        await createLog({ ...newLog, message: 'Update rewards' })
    } catch (error) {
        await createLog({
            ...newLog,
            status: false,
            message: 'Error Update rewards: ' + error.message,
        })
    }
}
