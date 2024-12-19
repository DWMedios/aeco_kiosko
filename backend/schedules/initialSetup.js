const connectToDatabase = require('../db/index')
const { updateCompany } = require('../repositories/companyRepository')
const { createLog } = require('../repositories/updateRepository')

const { fetchFromApi } = require('../fetchHelper')

const getInitialSetup = async () => {
  const { sequelize } = await connectToDatabase()
  const transaction = await sequelize.transaction()
  const newLog = { type: 'inital' }
  try {
    const data = await fetchFromApi('/aecos/initial-setup/AECO123456')
    await updateCompany(1, { name: data.company.name }, transaction)
    transaction.commit()
    await createLog(newLog)
    await finishSetup('init', 'AECO123456')
  } catch (error) {
    await createLog({ ...newLog, status: false, message: error.message })
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
