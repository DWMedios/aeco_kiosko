const cron = require('node-cron')
require('dotenv').config()

const getUpdates = async () => {
  try {
    const fetch = (await import('node-fetch')).default
    const response = await fetch(
      `${process.env.API_URL}/aecos/needs-update/AECO123456`,
      {
        method: 'GET',
        headers: {
          'x-api-key': 'API-KEY-DEMO',
        },
      }
    )
    const data = await response.json()
    console.log('---------- RESPONSE SCHEDULE ----------:', data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

cron.schedule('*/10 * * * * *', getUpdates)

module.exports = { getUpdates }
