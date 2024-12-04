const connectToDatabase = require('../db/index')
const { update } = require('../repositories/companyRepository')

const { fetchFromApi } = require('./fetchHelper')

const getInitialSetup = async () => {
  const { sequelize } = await connectToDatabase()
  const transaction = await sequelize.transaction()
  try {

    const data = await fetchFromApi('/aecos/initial-setup/AECO123456')
    await update(1, {name: data.company.name}, transaction)
    // await finishSetup('init', 'AECO123456')
    transaction.commit()
  } catch (error) {
    transaction.rollback()
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
