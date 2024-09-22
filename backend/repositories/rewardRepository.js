const connectToDatabase = require('../db/index')

exports.getAllByCategoryId = async (categoryId) => {
  const { Reward } = await connectToDatabase()
  return await Reward.findAll({
    where: { status: true, reward_category_id: categoryId },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}

exports.getAllCategories = async () => {
  const { RewardCategory } = await connectToDatabase()
  return await RewardCategory.findAll({
    where: { status: true },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}