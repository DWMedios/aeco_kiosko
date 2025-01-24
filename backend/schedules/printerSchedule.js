const cron = require('node-cron')

const connectToDatabase = require('../db/index')

const { fetchFromApi } = require('../utils/fetchHelper')
const { getById } = require('../repositories/companyRepository')
const { createPaper } = require('../repositories/paperRepository')
const { createLog } = require('../repositories/updateRepository')

const { finishSetup } = require('./initialSetup')

let cronJob = null

const getNewPaper = async () => {
  const { sequelize } = await connectToDatabase()
  const transaction = await sequelize.transaction()
  const newLog = { type: 'paper' }
  try {
    const aeco = await getById()
    const { serialNumber } = aeco.dataValues
    const data = await fetchFromApi(`/aecos/new-paper/${serialNumber}`)
    await createPaper(
      { roll_quantity: data.roll_quantity, current: data.current },
      transaction
    )
    transaction.commit()
    await createLog({ ...newLog, message: 'Se agrego el nuevo papel' })
    await finishSetup('paper', serialNumber)
    return true
  } catch (error) {
    await createLog({ ...newLog, status: false, message: error.message })
    transaction.rollback()
    console.error('Error agregar el papel:', error)
    return false
  }
}

exports.startCronJobPaper = () => {
  if (cronJob === null) {
    cronJob = cron.schedule('* * * * *', async () => {
      console.log('🚀 ~ Find paper --- JOB ---')
      const isActive = await getNewPaper()
      if (isActive) {
        stopCronJob()
      }
    })
    console.log('Cron job iniciado.')
  }
}

const stopCronJob = () => {
  if (cronJob) {
    cronJob.stop()
    cronJob = null
    console.log('Cron job detenido.')
  }
}
