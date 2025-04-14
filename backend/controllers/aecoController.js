const aecoRepository = require('../repositories/aecoRepository')
const HTTP_CODES = require('../utils/http-status-codes')

exports.getAecoUpdate = async (req, res) => {
  try {
    const aeco = await aecoRepository.getUpdate()
    if (!aeco) {
      return res
        .status(HTTP_CODES.NOT_FOUND)
        .send({ message: 'No se encontraron actualizaciones pendientes' })
    }
    return res.json(aeco)
  } catch (err) {
    console.error(err)
    return res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .send({ message: 'Error al obtener la empresa' })
  }
}
