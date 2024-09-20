const pageRepository = require('../repositories/pageRepository')
const HTTP_CODES = require('../utils/http-status-codes')

exports.getPageByName = async (req, res) => {
  try {
    const { name } = req.query
    if (!name) {
		  return res.status(HTTP_CODES.BAD_REQUEST).send({ message: 'El parámetro "name" es requerido' })
    }
    const page = await pageRepository.getByName(name)
    if (!page) {
		  return res.status(HTTP_CODES.NOT_FOUND).send({ message: 'No se encontraron páginas' })
    }
    return res.json(page)
	  } catch (err) {
    console.error(err)
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ message: 'Error al obtener la página' })
	  }
}