const connectToDatabase = require('../db/index')

let dbInstance
const initializeDatabase = async () => {
  if (!dbInstance) {
    dbInstance = await connectToDatabase()
  }
  return dbInstance
}

exports.findOne = async () => {
  const { Paper } = await initializeDatabase()
  return await Paper.findOne({
    where: { status: true },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}

exports.createPaper = async (data, transaction) => {
  const { Paper } = await initializeDatabase()
  return await Paper.create(data, { transaction })
}

exports.update = async (id, data) => {
  const { Paper } = await initializeDatabase()
  return await Paper.update(data, { where: { id } })
}
