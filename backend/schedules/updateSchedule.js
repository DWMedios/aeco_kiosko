const cron = require('node-cron')

const { savePages } = require('../repositories/pageRepository')

const { finishSetup } = require('./initialSetup')
const { fetchFromApi } = require('./fetchHelper')
require('dotenv').config()

const getUpdates = async () => {
  try {
    const data = await fetchFromApi('/aecos/needs-update/AECO123456')
    await savePages(data.pages)
    await finishSetup('updated', 'AECO123456')
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

cron.schedule('*/10 * * * * *', getUpdates)

module.exports = { getUpdates }
