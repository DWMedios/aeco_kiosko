const connectToDatabase = require('../db/index')

exports.getAllByType = async (type) => {
  const { Reward } = await connectToDatabase()
  return await Reward.findAll({
    where: { status: true, type },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}

exports.getAllCategories = async () => {
  const { Reward } = await connectToDatabase()
  return await Reward.findAll({
    where: { status: true },
    group: ['type'],
    attributes: ['type']
  })
}

exports.getOne = async (id) => {
  const { Reward } = await connectToDatabase()
  return await Reward.findOne({
    where: { id },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    order: [['order', 'ASC']]
  })
}

exports.updateRewards = async (rewards) => {
  const { Reward } = await connectToDatabase()


  return await Reward.bulkCreate(rewards, {
    updateOnDuplicate: ['name', 'description', 'status', 'type', 'image', 'order', 'metadata', 'establishment']
  })
}

