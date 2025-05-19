const cron = require('node-cron')

const { createLog } = require('../repositories/updateRepository')
const { findAll } = require('../repositories/ticketRepository')
const { UPDATE_TYPES } = require('../enums/update')

const { fetchFromApi } = require('../utils/fetchHelper')
const {
    getLastCapacity,
    createCapacities,
    getLastProduct,
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

const toDay = new Date().toISOString().split('T')[0]
let cronJob = null

exports.startCronJobUpload = async () => {
    uploadData()
    if (cronJob === null) {
        cronJob = cron.schedule('0 12 * * *', async () => {
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
        // const aeco = await getById()
        // const { serialNumber } = aeco.dataValues
        const tickets = await findAll(toDay)
        await uploadDailyStats(tickets)
        await uploadTickets(tickets)
        await uploadProductStats(tickets)
        await uploadPackagingStats(tickets)
        await getCapacitiesAfterLast()
        await getProductsAfterLast()
        await getRewardsServer()
        await createLog({ ...newLog, message: 'Upload susccefully' })
        // return true
    } catch (error) {
        await createLog({ ...newLog, status: 0, message: error.message })
        console.error('Error:', error)
        return false
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

        if ((stats.length > 0)) {
            for (const stat of stats) {
                await fetchFromApi('/api/v1/aecos/upload-daily-stats', 'POST', {
                    totalTickets: stat.total_tickets,
                    totalBottles: stat.total_bottles,
                    totalCans: stat.total_cans,
                    createdAt: stat.createdAt,
                })
                await updateDailyStats(stat.id)
            }
            await createLog({ ...newLog, message: 'Upload daily stats' })
        }
    } catch (error) {
        await createLog({
            ...newLog,
            status: 0,
            message: 'Upload daily stats: ' + error.message,
        })
    }
}

const uploadTickets = async (tickets) => {
    const newLog = { type: UPDATE_TYPES.UPLOAD }
    try {
        const transformed = {
            tickets: tickets.map((ticket) => ({
                folio: `AECO001-${ticket.folio}`,
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
            })),
        }
        await fetchFromApi(`/api/v1/aecos/upload-tickets`, 'POST', transformed)
        await createLog({ ...newLog, message: 'Upload tickets' })
    } catch (error) {
        await createLog({
            ...newLog,
            status: false,
            message: 'Upload tickets: ' + error.message,
        })
    }
}

const uploadProductStats = async (tickets) => {
    const newLog = { type: UPDATE_TYPES.UPLOAD }
    try {
        const productStats = {}

        if ((tickets, length > 0)) {
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
                    createdAt: toDay,
                })
            )

            for (const stat of transformedStats) {
                await saveProductStats(stat)
            }
        }

        const stats = findAllProductStat()
        if (stats.length > 0) {
            await fetchFromApi('/api/v1/aecos/upload-product-stats', 'POST', {
                stats: stats.map((item) => ({
                    productId: parseInt(item.product_id),
                    totalCount: item.total_count,
                    createdAt: item.createdAt,
                })),
            })
            for (const stat of stats) {
                await updateProductStat(stat.id)
            }
            await createLog({ ...newLog, message: 'Upload product stats' })
        }
    } catch (error) {
        await createLog({
            ...newLog,
            status: 0,
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
                packagingType: 'bottle',
                totalCount: totalBottles,
                createdAt: toDay,
            })
            await savePackagingStats({
                packagingType: 'can',
                totalCount: totalCans,
                createdAt: toDay,
            })
        }

        const stats = await findAllPackagingStat
        if (stats.length > 0) {
            await fetchFromApi('/api/v1/aecos/upload-packaging-stats', 'POST', {
                stats: stats.map((item) => ({
                    packagingType: item.packaging_type,
                    totalCount: item.total_count,
                    createdAt: item.createdAt,
                })),
            })
            for (const stat of stats) {
                await updatePackagingStat(stat.id)
            }
            await createLog({ ...newLog, message: 'Upload packaging stats' })
        }
    } catch (error) {
        await createLog({
            ...newLog,
            status: 0,
            message: 'Upload packaging stats: ' + error.message,
        })
    }
}

const getCapacitiesAfterLast = async () => {
    const newLog = { type: UPDATE_TYPES.UPDATE }
    try {
        const capacity = await getLastCapacity()
        const data = await fetchFromApi(
            `/api/v1/products/capacities/after-last?lastId=${capacity.dataValues.id}`,
            'GET'
        )
        if (data.length > 0) await createCapacities(data)
        await createLog({ ...newLog, message: 'Update capacities after last' })
    } catch (error) {
        await createLog({
            ...newLog,
            status: 0,
            message: 'Update capacities after last: ' + error.message,
        })
    }
}

const getProductsAfterLast = async () => {
    const newLog = { type: UPDATE_TYPES.UPDATE }
    try {
        const product = await getLastProduct()
        const data = await fetchFromApi(
            `/api/v1/products/after-last?lastId=${product.dataValues.id}`,
            'GET'
        )
        if (data.length > 0) await createProducts(data)
        await createLog({ ...newLog, message: 'Update products after last' })
    } catch (error) {
        await createLog({
            ...newLog,
            status: 0,
            message: 'Update products after last: ' + error.message,
        })
    }
}

const getRewardsServer = async () => {
    const newLog = { type: UPDATE_TYPES.UPDATE }
    try {
        const data = await fetchFromApi(`/api/v1/aecos/rewards`, 'GET')

        if (data.rewards.length > 0) await updateRewards(data.rewards)
        await createLog({ ...newLog, message: 'Update rewards' })
    } catch (error) {
        await createLog({
            ...newLog,
            status: 0,
            message: 'Update rewards: ' + error.message,
        })
    }
}