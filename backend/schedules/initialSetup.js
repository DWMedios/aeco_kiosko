const { savePages } = require('../repositories/pageRepository')

const { fetchFromApi } = require('./fetchHelper')

const getInitialSetup = async () => {
  try {
    const data = await fetchFromApi('/aecos/initial-setup/AECO123456')
    await savePages(data.pages)
    await finishSetup('init', 'AECO123456')
  } catch (error) {
    console.error('Error initial setup:', error)
  }
}

const finishSetup = async (type, serialNumber) => {
  try {
    await fetchFromApi(`/aecos/finish-setup/${type}/${serialNumber}`, 'PATCH')
  } catch (error) {
    console.error('Error finish setup:', error)
  }
}

module.exports = { getInitialSetup, finishSetup }
