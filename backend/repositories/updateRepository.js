const connectToDatabase = require('../db/index')

let dbInstance
const initializeDatabase = async () => {
  if (!dbInstance) {
    dbInstance = await connectToDatabase()
  }
  return dbInstance
}

exports.findOne = async (type) => {
  const { Update } = await initializeDatabase()
  return await Update.findOne({
    where: { type, status: true },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}

exports.createLog = async (data) => {
  const { Update } = await initializeDatabase()
  return await Update.create(data)
}

exports.updateLog = async (id, data) => {
  const { Update } = await initializeDatabase()
  return await Update.update(data, { where: { id } })
}
