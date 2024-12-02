const connectToDatabase = require('../db/index')

let dbInstance
const initializeDatabase = async () => {
  if (!dbInstance) {
    dbInstance = await connectToDatabase()
  }
  return dbInstance
}

exports.create = async (data) => {
  const { Movements } = await initializeDatabase()
  return await Movements.create(data)
}
