const connectToDatabase = require('../db/index')

exports.getAllByType = async (type) => {
  const { Reward } = await connectToDatabase()
  return await Reward.findAll({
    where: { status: true, type },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}
