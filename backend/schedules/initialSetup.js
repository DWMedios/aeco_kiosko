// const connectToDatabase = require('../db/index')
const { UPDATE_TYPES } = require('../enums/update')
const { updateCompany, getById } = require('../repositories/companyRepository')
const { createLog } = require('../repositories/updateRepository')
const { finishSetup } = require('../utils/apiAeco')

const { fetchFromApi } = require('../utils/fetchHelper')
const { processPageImage } = require('../utils/imageHelper')
const { sequelizeTransaction } = require('../utils/sequelizetransaction')

const getInitialSetup = async () => {
  // const { sequelize } = await connectToDatabase()
  // const transaction = await sequelize.transaction()
  const transaction = await sequelizeTransaction()
  const newLog = { type: UPDATE_TYPES.INITIAL }
  try {
    const aeco = await getById()
    const { serialNumber } = aeco.dataValues
    const data = await fetchFromApi(`/aecos/initial-setup/${serialNumber}`)
    await updateCompany(1, { name: data.company.name }, transaction)
    transaction.commit()
    await createLog({ ...newLog, message: 'Se configuro correctamente' })
    await finishSetup('init', serialNumber)
  } catch (error) {
    await createLog({ ...newLog, status: false, message: error.message })
    transaction.rollback()
    console.error('Error initial setup:', error)
  }
}

const downLoadImage = async () => {
  console.log('Init download proccess')
  const path =
    'https://s3-bucket-dev-acea.s3.us-east-1.amazonaws.com/dw/demo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA4T4OCMARJGAXWMH3%2F20241230%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241230T162031Z&X-Amz-Expires=3600&X-Amz-Signature=8c0a2c828ff04a47e967a1d83318371f49201e8c1402d50a1e80f7b177043a21&X-Amz-SignedHeaders=host&x-id=GetObject'
  try {
    await processPageImage(path, 'demo.png')
  } catch (error) {
    console.log('🚀 ~ downloadImage ~ error:', error)
  }
}

module.exports = { getInitialSetup, downLoadImage }
