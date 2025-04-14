const connectToDatabase = require('../db/index')

const sequelizeTransaction = async () => {
  const { sequelize } = await connectToDatabase()
  return await sequelize.transaction()
}

module.exports = { sequelizeTransaction }
