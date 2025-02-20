const ticketRepository = require('../repositories/ticketRepository')
const movementRepository = require('../repositories/movementRepository')
const HTTP_CODES = require('../utils/http-status-codes')
const { ticketPrinter } = require('../utils/printHelper')

exports.create = async (req, res) => {
  try {
    const data = req.body
    if (!data) {
      return res
        .status(HTTP_CODES.BAD_REQUEST)
        .send({ message: 'No se puede crear el ticket' })
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
    const { movement_id } = req.body
    const movement = await movementRepository.findOne(movement_id)
    if (!movement) {
      return res.status(HTTP_CODES.NOT_FOUND).send({
        message: 'No se puede imprimir el ticket, papel no disponible',
      })
    }
    await ticketPrinter(movement.dataValues)
    await ticketRepository.update(movement_id, { printed_ticket: 1 })
    return res.json({ message: 'Ticket impreso' })
  } catch (err) {
    console.error(err)
    return res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .send({ message: 'Error al imprimir el ticket' })
  }
}
