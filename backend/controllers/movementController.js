const movementRepository = require('../repositories/movementRepository')
const HTTP_CODES = require('../utils/http-status-codes')

exports.create = async (req, res) => {
  console.log('🚀 ~ exports.create= ~ req:', req)
  try {
    const data = req.body
    if (!data) {
      return res
        .status(HTTP_CODES.BAD_REQUEST)
        .send({ message: 'No se puede crear el movimiento' })
    }
    const movement = await movementRepository.create(data)

    return res.json(movement)
  } catch (err) {
    console.error(err)
    return res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .send({ message: 'Error al crear' })
  }
}
