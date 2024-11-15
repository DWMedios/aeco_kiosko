const { savePages } = require('../repositories/pageRepository')

require('dotenv').config()

const getInitialSetup = async () => {
  try {
    const fetch = (await import('node-fetch')).default
    const response = await fetch(
      `${process.env.API_URL}/aecos/initial-setup/AECO123456`,
      {
        method: 'GET',
        headers: {
          'x-api-key': 'API-KEY-DEMO',
        },
      }
    )
    const data = await response.json()
    await savePages(data.pages)
    console.log('---------- RESPONSE INITIAL SETUP ----------:', data.pages)
  } catch (error) {
    console.log('---------- ERROR INITIAL SETUP ----------:', error)
    console.error('Error fetching data:', error)
  }
}

module.exports = { getInitialSetup }
