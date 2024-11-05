import cron from 'node-fetch'
require('dotenv').config()

const getDataFromApi = async () => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/aecos/needs-update/serial/AECO123456`,
      {
        method: 'GET',
        headers: {
          'x-api-key': 'API-KEY-DEMO',
        },
      }
    )
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

cron.schedule('*/10 * * * * *', getDataFromApi)
