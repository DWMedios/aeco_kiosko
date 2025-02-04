const ticketRepository = require('../repositories/ticketRepository')
const paperRepository = require('../repositories/paperRepository')
const HTTP_CODES = require('../utils/http-status-codes')

exports.create = async (req, res) => {
  try {
    const data = req.body
    if (!data) {
      return res
        .status(HTTP_CODES.BAD_REQUEST)
        .send({ message: 'No se puede el ticket' })
    }
    const paper = await ticketRepository.create(data)

    return res.json(paper)
  } catch (err) {
    console.error(err)
    return res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .send({ message: 'Error al crear el ticket' })
  }
}

exports.print = async (req, res) => {
  try {
    const paper = await ticketRepository.findOne()
    if (!paper) {
      return res.status(HTTP_CODES.NOT_FOUND).send({
        message: 'No se puede imprimir el ticket, papel no disponible',
      })
    }
    await paperRepository.update(paper.id, { printed: true })
    return res.json(paper)
  } catch (err) {
    console.error(err)
    return res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .send({ message: 'Error al imprimir el ticket' })
  }
}
