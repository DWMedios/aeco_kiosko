const connectToDatabase = require('../db/index')
const { updateCompany, getById } = require('../repositories/companyRepository')
const { createLog } = require('../repositories/updateRepository')

const { fetchFromApi } = require('../utils/fetchHelper')

const getInitialSetup = async () => {
  const { sequelize } = await connectToDatabase()
  const transaction = await sequelize.transaction()
  const newLog = { type: 'Initial' }
  try {
    const aeco = await getById()
    const {serialNumber}= aeco.dataValues

    const data = await fetchFromApi(`/aecos/initial-setup/${serialNumber}`)
    await updateCompany(1, { name: data.company.name }, transaction)
    transaction.commit()
    await createLog({...newLog, message: 'Se configuro correctamente'})
    await finishSetup('init', serialNumber)
  } catch (error) {
    await createLog({ ...newLog, status: false, message: error.message })
    transaction.rollback()
    console.error('Error initial setup:', error)
  }
}

const finishSetup = async (type, serialNumber) => {
  try {
    await fetchFromApi(`/aecos/finish-setup/${type}/${serialNumber}`, 'PATCH')
    return
  } catch (error) {
    console.error('Error finish setup:', error)
  }
}

module.exports = { getInitialSetup, finishSetup }
