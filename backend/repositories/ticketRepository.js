const connectToDatabase = require('../db/index')

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

exports.create = async (data, transaction) => {
  const { Ticket } = await initializeDatabase()
  return await Ticket.create(data, { transaction })
}

exports.update = async (id, data) => {
  const { Ticket } = await initializeDatabase()
  return await Ticket.update(data, { where: { id } })
}
