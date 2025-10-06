const { Op } = require('sequelize')

const connectToDatabase = require('../db/index')

exports.getAll = async (status = true, fechas = true, all = false) => {
    const { Publicity } = await connectToDatabase()
    const where = {}
    if (all) {
        const where = {
            active: status,
        }

        if (fechas) {
            where.end_date = {
                [Op.gte]: new Date(),
            }
        }
    }

    return await Publicity.findAll({
        where,
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    })
}

exports.updatePublicity = async (publicities) => {
    const { Publicity } = await connectToDatabase()
    return await Publicity.bulkCreate(publicities, {
        updateOnDuplicate: ['name', 'path', 'local_path', 'end_date', 'active', 'mime_type']
    })
}

exports.suspendPublicity = async () => {
    const { Publicity } = await connectToDatabase()
    return await Publicity.update({ active: false }, { where: { end_date: { [Op.lt]: new Date() } } })
}

exports.removePublicity = async (id) => {
    const { Publicity } = await connectToDatabase()
    return await Publicity.destroy({
        where: {
            id: id
        }
    })
}