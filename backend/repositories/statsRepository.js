const connectToDatabase = require('../db/index')

let dbInstance
const initializeDatabase = async () => {
    if (!dbInstance) {
        dbInstance = await connectToDatabase()
    }
    return dbInstance
}

exports.saveDailyStats = async (data) => {
    const { DailyStat } = await initializeDatabase()
    return await DailyStat.create(data)
}

exports.savePackagingStats = async () => {
    const { PackagingStat } = await initializeDatabase()
    return await PackagingStat.create(data)
}

exports.saveProductStats = async () => {
    const { ProductStat } = await initializeDatabase()
    return await ProductStat.create(data)
}

exports.findAllDailyStats = async () => {
    const { DailyStat } = await initializeDatabase()
    return await DailyStat.findAll({
        where: { synchronized: false },
        attributes: { exclude: ['updatedAt'] },
    })
}

exports.findAllPackagingStat = async () => {
    const { PackagingStat } = await initializeDatabase()
    return await PackagingStat.findAll({
        where: { synchronized: false },
        attributes: { exclude: ['updatedAt'] },
    })
}

exports.findAllProductStat = async () => {
    const { ProductStat } = await initializeDatabase()
    return await ProductStat.findAll({
        where: { synchronized: false },
        attributes: { exclude: ['updatedAt'] },
    })
}

exports.updateDailyStats = async (id) => {
    const { DailyStat } = await initializeDatabase()
    return await DailyStat.update({ synchronized: true }, { where: { id } })
}

exports.updatePackagingStat = async (id) => {
    const { PackagingStat } = await initializeDatabase()
    return await PackagingStat.update({ synchronized: true }, { where: { id } })
}

exports.updateProductStat = async (id) => {
    const { ProductStat } = await initializeDatabase()
    return await ProductStat.update({ synchronized: true }, { where: { id } })
}