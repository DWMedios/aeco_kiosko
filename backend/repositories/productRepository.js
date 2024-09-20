const connectToDatabase = require('../db/index')

exports.getByCode = async (code) => {
  const { Product, Capacity } = await connectToDatabase()
  return await Product.findOne({
    where: { code },
    include: [
      {
        model: Capacity,
        as: 'capacity',
      },
    ],
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}