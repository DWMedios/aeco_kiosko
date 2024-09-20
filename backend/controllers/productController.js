const productRepository = require('../repositories/productRepository')
const HTTP_CODES = require('../utils/http-status-codes')

exports.getByCode = async (req, res) => {
  try {
    const { code } = req.query

    if (!code) {
      return res.status(HTTP_CODES.BAD_REQUEST).send({ message: 'El parámetro "code" es requerido' })
    }

    const product = await productRepository.getByCode(code)
    if (!product) {
		  return res.status(HTTP_CODES.NOT_FOUND).send({ message: 'No se encontraron productos' })
    }
    return res.json(product)
	  } catch (err) {
    console.error(err)
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ message: 'Error al obtener el producto' })
	  }
}