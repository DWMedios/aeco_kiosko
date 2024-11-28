require('dotenv').config()

const fetchFromApi = async (endpoint, method = 'GET', body = null) => {
  try {
    const fetch = (await import('node-fetch')).default
    
    const response = await fetch(`${process.env.API_URL}${endpoint}`, {
      method,
      headers: {
        'x-api-key': process.env.API_KEY || 'API-KEY-DEMO',
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : null,
    })

    return await response.json()
  } catch (error) {
    console.error(`Error al hacer fetch a ${endpoint}:`, error.message)
    throw error
  }
}

module.exports = { fetchFromApi }