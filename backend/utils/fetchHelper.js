require('dotenv').config()

const fetchFromApi = async (endpoint, method = 'GET', body = null, externalUrl = false) => {
  try {
    const fetch = (await import('node-fetch')).default
    
    const response = await fetch(`${externalUrl?'':process.env.API_URL}${endpoint}`, {
      method,
      headers: {
        'x-api-key': process.env.API_KEY || 'API-KEY-DEMO',
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : null,
    })

    if (externalUrl) return response

    return await response.json()
  } catch (error) {
    console.error(`Error al hacer fetch a ${endpoint}:`, error.message)
    throw error
  }
}

module.exports = { fetchFromApi }