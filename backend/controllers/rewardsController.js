const rewardRepository = require('../repositories/rewardRepository')
const HTTP_CODES = require('../utils/http-status-codes')

exports.getRewardsByType = async (req, res) => {
  try {
    const { type } = req.query
    if (!type) {
      return res
        .status(HTTP_CODES.BAD_REQUEST)
        .send({ message: 'El tipo de recompensa es requerido' })
    }
    const rewards = await rewardRepository.getAllByType(type)
    if (!rewards) {
      return res
        .status(HTTP_CODES.NOT_FOUND)
        .send({ message: 'No se encontraron categorías de recompensas' })
    }
    return res.json(rewards)
  } catch (err) {
    console.error(err)
    return res
      .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
      .send({ message: 'Error al obtener las categorías de recompensas' })
  }
}
