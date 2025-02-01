const paperRepository = require('../repositories/paperRepository')
const HTTP_CODES = require('../utils/http-status-codes')

exports.getActive = async (req, res) => {
  try {
    const paper = await paperRepository.findOne()
    if (!paper) {
      return res
        .status(HTTP_CODES.NOT_FOUND)
        .send({ message: 'No se encontro papel disponible' })
    }
    return res.json(paper)
  } catch (err) {
    console.error(err)
    return res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .send({ message: 'Error al obtener el papel' })
  }
}

exports.update = async (req, res) => {
  try {
    const data = req.body
    if (!data) {
      return res
        .status(HTTP_CODES.BAD_REQUEST)
        .send({ message: 'No se puede actualizar el papel' })
    }
    const paper = await paperRepository.create(data)

    return res.json(paper)
  } catch (err) {
    console.error(err)
    return res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .send({ message: 'Error al crear' })
  }
}
