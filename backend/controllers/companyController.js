const companyRepository = require('../repositories/companyRepository')
const HTTP_CODES = require('../utils/http-status-codes')

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