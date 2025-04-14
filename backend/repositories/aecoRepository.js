const connectToDatabase = require('../db/index')

let dbInstance
const initializeDatabase = async () => {
  if (!dbInstance) {
    dbInstance = await connectToDatabase()
  }
  return dbInstance
}

exports.getUpdate = async () => {
  const { Update } = await initializeDatabase()
  return await Update.findOne({
    where: { status: true },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}
