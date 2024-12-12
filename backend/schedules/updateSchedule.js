const cron = require('node-cron')

const connectToDatabase = require('../db/index')
const { createLog } = require('../repositories/aecoRepository')
const { savePages } = require('../repositories/pageRepository')

const { finishSetup } = require('./initialSetup')
const { fetchFromApi } = require('./fetchHelper')
require('dotenv').config()

const getUpdates = async () => {
  const { sequelize } = await connectToDatabase()
  const transaction = await sequelize.transaction()
  const newLog = { type: 'inital' }
  try {
    const data = await fetchFromApi('/aecos/needs-update/AECO123456')
    transaction.commit()
    await savePages(data.pages)
    await createLog(newLog)
    await finishSetup('updated', 'AECO123456')
  } catch (error) {
    await createLog({ ...newLog, status: false, message: error.message })
    transaction.rollback()
    console.error('Error fetching data:', error)
  }
}

cron.schedule('* * * * *', getUpdates)

module.exports = { getUpdates }
