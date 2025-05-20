const { Op } = require('sequelize')

const connectToDatabase = require('../db/index')
const { getById } = require('./companyRepository')

let dbInstance
const initializeDatabase = async () => {
  if (!dbInstance) {
    dbInstance = await connectToDatabase()
  }
  return dbInstance
}

exports.findOne = async () => {
  const { Ticket } = await initializeDatabase()
  return await Ticket.findOne({
    where: { status: true },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}

exports.findAll = async () => {
  const { Ticket } = await initializeDatabase()

  return await Ticket.findAll({
    where: { synchronized: false },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}

exports.findAllToDay = async () => {
  const { Ticket } = await initializeDatabase()
  const toDay = new Date()
  const startOfDay = new Date(toDay.setHours(0, 0, 0, 0))
  const endOfDay = new Date(toDay.setHours(23, 59, 59, 999))
  return await Ticket.findAll({
    where: {
      synchronized: false, createdAt: {
        [Op.between]: [startOfDay, endOfDay],
      }
    },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}

exports.create = async (data, transaction) => {
  const { Ticket } = await initializeDatabase()
  const aeco = await getById()
  const { serialNumber } = aeco.dataValues

  const ticket = await Ticket.create(data, { transaction })

  const idFormatted = ticket.id.toString().padStart(2, '0')
  const serialPrefix = serialNumber.toString().slice(0, 5)
  const folio = `AECO${serialPrefix}-${idFormatted}`

  await Ticket.update({ folio }, {
    where: { id: ticket.id },
    transaction,
  })

  return {
    ...ticket.dataValues,
    folio,
  }
}


exports.update = async (id, data) => {
  const { Ticket } = await initializeDatabase()
  return await Ticket.update(data, { where: { id } })
}
