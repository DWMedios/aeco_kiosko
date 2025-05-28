require('dotenv').config()

const fetchFromApi = async (endpoint, method = 'GET', body = null, xApiKey = null) => {
  try {
    const fetch = (await import('node-fetch')).default

    const response = await fetch(`${process.env.API_URL}${endpoint}`, {
      method,
      headers: {
        'x-api-key': xApiKey,
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : null,
    })

    const data = await response.json()

    if (!response.ok) {
      throw response.status === 500
        ? {
          message: 'Error interno estamos trabajando para mejorar.!',
          type: 'error',
        }
        : data
    }

    return data
  } catch (error) {
    console.error(`Error al hacer fetch a ${endpoint}:`, error)
    throw error
  }
}

module.exports = { fetchFromApi }