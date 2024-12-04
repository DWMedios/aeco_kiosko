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

exports.getBySerialNumber = async serialNumber => {
  const { Company } = await initializeDatabase()
  return await Company.findOne({
    where: { serialNumber },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}

exports.create = async data => {
  const { Company } = await initializeDatabase()
  return await Company.create(data)
}

exports.update = async (id, data, transaction) => {
  console.log('🚀 ~ exports.update= ~ data:', data)
  const { Company } = await initializeDatabase()
  return await Company.update(data, { where: { id }, transaction})
}