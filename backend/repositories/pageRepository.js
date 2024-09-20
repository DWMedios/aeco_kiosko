const connectToDatabase = require('../db/index')

exports.getByName = async (name) => {
  const { Page } = await connectToDatabase()
  return await Page.findOne({
    where: { name },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}