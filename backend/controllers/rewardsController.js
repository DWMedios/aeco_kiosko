const rewardRepository = require('../repositories/rewardRepository')
const HTTP_CODES = require('../utils/http-status-codes')

exports.getRewardsByCategory = async (req, res) => {
  try {
	  const { reward_category } = req.query

	  if (!reward_category) {
      return res.status(HTTP_CODES.BAD_REQUEST).send({ message: 'No se proporcionó una categoría' })
	  }

	  const rewards = await rewardRepository.getAllByCategoryId(reward_category)
	  if (!rewards) {
      return res.status(HTTP_CODES.NOT_FOUND).send({ message: 'No se encontraron recompensas' })
	  }

	  return res.json(rewards)
  } catch (err) {
	  console.error(err)
	  return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ message: 'Error al obtener las recompensas' })
  }
}

exports.getCategories = async (req, res) => {
  try {
	  const rewards = await rewardRepository.getAllCategories()
	  if (!rewards) {
      return res.status(HTTP_CODES.NOT_FOUND).send({ message: 'No se encontraron categorías de recompensas' })
	  }
	  return res.json(rewards)
  } catch (err) {
	  console.error(err)
	  return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send({ message: 'Error al obtener las categorías de recompensas' })
  }
}