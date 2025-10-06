const cron = require('node-cron')

const { createLog } = require('../repositories/updateRepository')
const {
    findAll,
    update,
    findAllToDay,
} = require('../repositories/ticketRepository')
const { getById } = require('../repositories/companyRepository')
const { UPDATE_TYPES } = require('../enums/update')

const { fetchFromApi } = require('../utils/fetchHelper')
const {
    getLastCapacity,
    createCapacities,
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
const { updateRewards, getOne } = require('../repositories/rewardRepository')
const { encryptStr } = require('../utils/crypto')
const {
    updatePublicity,
    getAll,
    removePublicity, suspendPublicity
} = require('../repositories/publicityRepository')
const { processMediaAsset, deleteMedia } = require('../utils/mediAssetHelper')

let cronJob = null
let xApiKey = null

exports.startCronJobUpload = async () => {
    uploadData()
    if (cronJob === null) {
        cronJob = cron.schedule('* 18 * * *', async () => {
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
            console.log('🚀 ~ uploadData ~ serialNumber:', serialNumber)
            xApiKey = encryptStr(serialNumber)
            console.log('🚀 ~ uploadData ~ xApiKey:', xApiKey)
            const tickets = await findAllToDay()
            await uploadTickets()
            await uploadDailyStats(tickets)
            await uploadProductStats(tickets)
            await uploadPackagingStats(tickets)
            await getCapacitiesAfterLast()
            await getProductsAfterLast()
            await getRewardsServer()
            await getPublicity()
            // await removeAdvertising()
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
        const removeImage = []
        // if (data.rewards.length > 0) await updateRewards(data.rewards)
        if (data.rewards.length > 0) {
            const rewardsProcessed = await Promise.all(
                data.rewards.map(async ({ note, imageId, mediaAsset, ...rest }) => {
                    try {
                        const findreward = await getOne(rest.id)
                        const path = await processMediaAsset(mediaAsset, xApiKey)
                        if (findreward && findreward.image && findreward.image !== path) {
                            removeImage.push({ newImage: path, ...findreward.dataValues })
                        }
                        if (!path || path === undefined || path === '' || path === null)
                            return null
                        return {
                            image: path,
                            ...rest,
                        }
                    } catch {
                        return null
                    }
                })
            )

            const validrewards = rewardsProcessed.filter(Boolean)

            if (validrewards.length > 0) {
                await updateRewards(validrewards)

                if (removeImage.length > 0) {
                    for (const image of removeImage) {
                        await deleteMedia(image.image)
                    }
                }
            }
        }
        await createLog({ ...newLog, message: 'Update rewards' })
    } catch (error) {
        await createLog({
            ...newLog,
            status: false,
            message: 'Error Update rewards: ' + error.message,
        })
    }
}

const getPublicity = async () => {
    const newLog = { type: UPDATE_TYPES.UPDATE }
    try {

        const data = await fetchFromApi('/aecos/advertisings', 'GET', null, xApiKey)
        if (data.error) throw data

        if (data.campaigns.length > 0) {
            data.campaigns = data.campaigns.filter(campaign => campaign.mediaAsset && campaign.mediaAsset.fileKey)
            const advertisings = await Promise.all(
                data.campaigns.map(async (campaign) => {
                    try {
                        console.log("🚀 ~ getPublicity ~-------- xApiKey:", xApiKey)
                        console.log("🚀 ~ getPublicity ~-------- mediaAsset:", campaign.mediaAsset.fileKey)

                        const path = await processMediaAsset(campaign.mediaAsset, xApiKey)
                        if (!path || path === undefined || path === '' || path === null)
                            return null
                        return {
                            id: campaign.id,
                            name: campaign.contractName,
                            path,
                            active: true,
                            end_date: campaign.endDate,
                            mime_type: campaign.mediaAsset.mimeType,
                            metadata: campaign.metadata,
                        }
                    } catch {
                        // Si falla, retornamos null y luego lo filtramos
                        return null
                    }
                })
            )

            const validAdvertisings = advertisings.filter(Boolean)

            if (validAdvertisings.length > 0) {
                await updatePublicity(validAdvertisings)
            }
        }
        await suspendPublicity()
        await createLog({ ...newLog, message: 'Update advertisings' })
    } catch (error) {
        await createLog({
            ...newLog,
            status: false,
            message: 'Error Update advertisings: ' + error.message,
        })
    }
}

// const removeAdvertising = async () => {
//     const newLog = { type: UPDATE_TYPES.UPDATE }
//     try {
//         const advertising = await getAll(false, false)
//         if (advertising.length > 0) {
//             advertising.forEach(async (item) => {
//                 try {
//                     const deleted = await deleteMedia(item.path)
//                     if (deleted) {
//                         await removePublicity(item.id)
//                     }
//                 } catch (error) {
//                     console.error('Error al eliminar archivo:', error)
//                 }
//             })
//         }
//         await createLog({ ...newLog, message: 'Remove advertising' })
//     } catch (error) {
//         await createLog({
//             ...newLog,
//             status: false,
//             message: 'Error Remove advertising: ' + error.message,
//         })
//     }
// }
