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
