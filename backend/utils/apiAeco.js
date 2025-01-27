const { fetchFromApi } = require('./fetchHelper')

const finishSetup = async (type, serialNumber) => {
  try {
    await fetchFromApi(`/aecos/finish-setup/${type}/${serialNumber}`, 'PATCH')
    return
  } catch (error) {
    console.error('Error finish setup:', error)
  }
}

module.exports = { finishSetup }
