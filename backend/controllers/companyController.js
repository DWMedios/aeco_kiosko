const companyRepository = require('../repositories/companyRepository')
const HTTP_CODES = require('../utils/http-status-codes')
const { getSerialNumber } = require('../utils/raspiInfo')

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
    const updatedCompany = await companyRepository.update(company.id, {
      serialNumber,
    })
    const dataValues = updatedCompany?.dataValues
    console.log('Empresa actualizada:', dataValues)
    return
  } catch (err) {
    console.error(err)
    return
  }
}
