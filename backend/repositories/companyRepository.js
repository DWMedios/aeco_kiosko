const connectToDatabase = require('../db/index')

let dbInstance
const initializeDatabase = async () => {
  if (!dbInstance) {
    dbInstance = await connectToDatabase()
  }
  return dbInstance
}

exports.getAll = async () => {
  const { Company } = await initializeDatabase()
  return await Company.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}

exports.getByMacAddress = async macAddress => {
  const { Company } = await initializeDatabase()
  return await Company.findOne({
    where: { macAddress },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}

exports.create = async data => {
  const { Company } = await initializeDatabase()
  return await Company.create(data)
}

exports.update = async (id, data) => {
  const { Company } = await initializeDatabase()
  return await Company.update(data, { where: { id } })
}