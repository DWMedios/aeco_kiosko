const companyRepository = require('../repositories/companyRepository')
const HTTP_CODES = require('../utils/http-status-codes')
const { getMacAddress } = require('../utils/macAddress')

exports.getCompany = async (req, res) => {
  try {
	  const company = await companyRepository.getAll()
	  if (!company) {
      return res.status(HTTP_CODES.NOT_FOUND).send({ message: 'No se encontraron empresas' })
	  }
	  return res.json(company)
  } catch (err) {
	  console.error(err)
	  return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ message: 'Error al obtener la empresa' })
  }
}

exports.updateCompanyByMacAddress = async () => {
  try {
    const macAddress = await getMacAddress()
    	const company = await companyRepository.getByMacAddress(macAddress)
    	if (!company) {
      		console.log('No se encontró la empresa con la dirección MAC:', macAddress)
      		console.log('Creando empresa...')
      		const newCompany = await companyRepository.create({ macAddress, metadata: { createdBy: 'system' } })
      		console.log('Empresa creada:', newCompany)
			return
    	}
    	const updatedCompany = await companyRepository.update(company.id, { macAddress })
    	console.log('Empresa actualizada:', updatedCompany)
		return
  } catch (err) {
    console.error(err)
	return
  }
}