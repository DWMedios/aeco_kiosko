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

const uploadData = async () => {
    const newLog = { type: UPDATE_TYPES.UPLOAD }
    try {
        // const aeco = await getById()
        // const { serialNumber } = aeco.dataValues
        const tickets = await findAll()
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
        await createLog({ ...newLog, status: false, message: error.message })
        console.error('Error:', error)
        return false
    }
}

const uploadDailyStats = async (tickets) => {
    const newLog = { type: UPDATE_TYPES.UPLOAD }
    try {
        let totalBottles = 0
        let totalCans = 0

        if (tickets.length > 0) {
            tickets.forEach((ticket) => {
                totalBottles += ticket.total_bottles || 0
                totalCans += ticket.total_cans || 0
            })
        }
        await fetchFromApi(`/api/v1/aecos/upload-daily-stats`, 'POST', {
            totalTickets: tickets.length,
            totalBottles,
            totalCans,
            createdAt: toDay,
        })
        await createLog({ ...newLog, message: 'Upload daily stats' })
    } catch (error) {
        await createLog({
            ...newLog,
            status: false,
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

        const transformedStats = {
            stats: Object.entries(productStats).map(([productId, data]) => ({
                productId: parseInt(productId),
                totalCount: data.totalCount,
                createdAt: toDay,
            })),
        }
        const data = await fetchFromApi(
            `/api/v1/aecos/upload-product-stats`,
            'POST',
            transformedStats
        )
        await createLog({ ...newLog, message: 'Upload product stats' })
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
        let totalBottles = 0
        let totalCans = 0
        tickets.forEach((ticket) => {
            totalBottles += ticket.total_bottles || 0
            totalCans += ticket.total_cans || 0
        })
        await fetchFromApi(`/api/v1/aecos/upload-packaging-stats`, 'POST', {
            stats: [
                {
                    packagingType: 'bottle',
                    totalCount: totalBottles,
                    createdAt: toDay,
                },
                {
                    packagingType: 'can',
                    totalCount: totalCans,
                    createdAt: toDay,
                },
            ],
        })
        await createLog({ ...newLog, message: 'Upload packaging stats' })
    } catch (error) {
        await createLog({
            ...newLog,
            status: false,
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
            status: false,
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
            status: false,
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
            status: false,
            message: 'Update rewards: ' + error.message,
        })
    }
}

const stopCronJob = () => {
    if (cronJob) {
        cronJob.stop()
        cronJob = null
        console.log('Cron job detenido.')
    }
}
