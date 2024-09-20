const connectToDatabase = require('../db/index')

exports.getAll = async () => {
  const { Company } = await connectToDatabase()
  return await Company.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}