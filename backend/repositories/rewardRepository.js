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

exports.updateRewards = async (rewards) => {
  const { Reward } = await connectToDatabase()
  const formattedRewards = rewards.map(({ note, imageId, mediaAssets, ...rest }) => ({
    ...rest,
  }))

  return await Reward.bulkCreate(formattedRewards, {
    updateOnDuplicate: ['name', 'description', 'status', 'type', 'order', 'metadata', 'establishment']
  })
}

