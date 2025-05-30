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

exports.getLastProduct = async () => {
  const { Product } = await connectToDatabase()
  return await Product.findOne({
    order: [['id', 'DESC']],
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}

exports.getLastCapacity = async () => {
  const { Capacity } = await connectToDatabase()
  return await Capacity.findOne({
    order: [['id', 'DESC']],
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  })
}

exports.createCapacities = async (capacities) => {
  const { Capacity } = await connectToDatabase()
  return await Capacity.bulkCreate(capacities, {
    ignoreDuplicates: true
  })
}

exports.createProducts = async (products) => {
  const { Product } = await connectToDatabase()
  const formattedProducts = products.map(({ capacityId, ...rest }) => ({
    ...rest,
    capacity_id: capacityId
  }))

  return await Product.bulkCreate(formattedProducts, {
    updateOnDuplicate: ['code', 'family', 'name', 'capacity_id']
  })
}