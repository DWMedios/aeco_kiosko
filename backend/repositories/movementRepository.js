const connectToDatabase = require('../db/index')

let dbInstance
const initializeDatabase = async () => {
  if (!dbInstance) {
    dbInstance = await connectToDatabase()
  }
  return dbInstance
}

exports.create = async (data) => {
  const { Movement } = await initializeDatabase()
  return await Movement.create(data)
}

exports.findOne = async (id) => {
  const { Movement } = await initializeDatabase()
  return await Movement.findOne({
    where: { id, printed_ticket: 0 },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}

exports.update = async (id, data) => {
  const { Movement } = await initializeDatabase()
  return await Movement.update(data, { where: { id } })
}
