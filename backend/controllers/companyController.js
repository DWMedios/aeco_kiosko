const companyRepository = require('../repositories/companyRepository')
const HTTP_CODES = require('../utils/http-status-codes')
const { getSerialNumber } = require('../utils/raspiInfo')
const { getById } = require('../repositories/companyRepository')
const { encryptStr } = require('../utils/crypto')


exports.getCompany = async (req, res) => {
  try {
    const company = await companyRepository.getAll()
    if (!company) {
      return res
        .status(HTTP_CODES.NOT_FOUND)
        .send({ message: 'No se encontraron empresas' })
    }
    return res.json(company)
  } catch (err) {
    console.error(err)
    return res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .send({ message: 'Error al obtener la empresa' })
  }
}

exports.updateCompanyBySerialNumber = async () => {
  try {
    const serialNumber = await getSerialNumber()
    const company = await companyRepository.getBySerialNumber(serialNumber)
    if (!company) {
      console.log(
        'No se encontró la empresa con el número de serie:',
        serialNumber
      )
      console.log('Creando empresa...')
      const newCompany = await companyRepository.create({
        serialNumber,
        metadata: { createdBy: 'system' },
      })
      const dataValues = newCompany?.dataValues
      console.log('Empresa creada:', dataValues)
      return
    }
    await companyRepository.updateCompany(company.id, {
      serialNumber,
    })
    console.log('Empresa actualizada')
    return
  } catch (err) {
    console.error(err)
    return
  }
}

exports.validateMachine = async (req, res) => {
  try {
    const fetch = (await import('node-fetch')).default

    // Verifica conexión a Internet
    const internetResponse = await fetch('https://www.google.com', {
      method: 'HEAD',
    })

    if (!internetResponse.ok) {
      return res.status(200).json({
        success: false,
        message: 'INTERNET',
      })
    }

    try {
      const aeco = await getById()
      const { serialNumber } = aeco.dataValues
      const xApiKey = encryptStr(serialNumber)
      const apiResponse = await fetch('https://ayuntaeco.com/api/v1/aecos/access-control', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': xApiKey,
        },
      })

      const serverDownCodes = [502, 503, 504, 522]

      if (serverDownCodes.includes(apiResponse.status)) {
        return res.status(200).json({
          success: false,
          message: 'API-DOWN',
          status: apiResponse.status,
        })
      }

      // if (!apiResponse.ok) {
      //   // API respondió pero con error (404, 500, etc.)
      //   return res.status(200).json({
      //     success: false,
      //     message: 'API-UP',
      //     statusCode: apiResponse.status,
      //   })
      // }

      return res.status(200).json({
        success: true,
        message: 'API-UP',
      })
    } catch (apiError) {
      // Error de red (host caído, sin conexión, etc.)
      return res.status(200).json({
        success: false,
        message: 'API-DOWN',
        error: apiError.message || 'Error desconocido',
      })
    }
  } catch (networkError) {
    return res.status(200).json({
      success: false,
      message: 'INTERNET',
      error: networkError.message || 'Error desconocido',
    })
  }
}
