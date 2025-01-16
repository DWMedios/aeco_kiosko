const cron = require('node-cron')

const connectToDatabase = require('../db/index')
const { createLog } = require('../repositories/aecoRepository')
const { savePages } = require('../repositories/pageRepository')
const { fetchFromApi } = require('../utils/fetchHelper')

const { finishSetup } = require('./initialSetup')
require('dotenv').config()

const getUpdates = async () => {
  const { sequelize } = await connectToDatabase()
  const transaction = await sequelize.transaction()
  const newLog = { type: 'Initial' }
  try {
    const data = await fetchFromApi('/aecos/needs-update/476e046a591f9c8a')
    transaction.commit()
    await savePages(data.pages)
    await createLog(newLog)
    await finishSetup('updated', '476e046a591f9c8a')
  } catch (error) {
    await createLog({ ...newLog, status: false, message: error.message })
    transaction.rollback()
    console.error('Error fetching data:', error)
  }
}

cron.schedule('* * * * *', getUpdates)

module.exports = { getUpdates }
