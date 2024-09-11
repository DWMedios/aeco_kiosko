const { Sequelize } = require('sequelize')
require('dotenv').config()

const capacityModel = require('./models/Capacity')
const companyModel = require('./models/Company')
const movementModel = require('./models/Movement')
const notificationModel = require('./models/Notification')
const paperModel = require('./models/Paper')
const productModel = require('./models/Product')
const publicityModel = require('./models/Publicity')
const rewardModel = require('./models/Reward')
const rewardCategoryModel = require('./models/RewardCategory')
const ticketModel = require('./models/Ticket')
const updateModel = require('./models/Update')

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    migrationStorage: 'json',
    migrationStorageTableName: 'migrations',
  }
)

const Capacity = capacityModel(sequelize, Sequelize)
const Company = companyModel(sequelize, Sequelize)
const Movement = movementModel(sequelize, Sequelize)
const Notification = notificationModel(sequelize, Sequelize)
const Paper = paperModel(sequelize, Sequelize)
const Product = productModel(sequelize, Sequelize)
const Publicity = publicityModel(sequelize, Sequelize)
const Reward = rewardModel(sequelize, Sequelize)
const RewardCategory = rewardCategoryModel(sequelize, Sequelize)
const Ticket = ticketModel(sequelize, Sequelize)
const Update = updateModel(sequelize, Sequelize)

const Models = {
  Capacity,
  Company,
  Movement,
  Notification,
  Paper,
  Product,
  Publicity,
  Reward,
  RewardCategory,
  Ticket,
  Update,
}

const connection = {}

Capacity.hasMany(Product, { as: 'products', foreignKey: 'capacity_id' })
Product.belongsTo(Capacity, { as: 'capacity', foreignKey: 'capacity_id' })

Reward.belongsTo(RewardCategory, {
  as: 'category',
  foreignKey: 'reward_category_id',
})
RewardCategory.hasMany(Reward, {
  as: 'reward',
  foreignKey: 'reward_category_id',
})

const connectDB = async () => {
  try {
    await sequelize.authenticate()
    console.log('Conexión a la base de datos establecida correctamente.')
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error?.message)
  }
}

module.exports = async () => {
  if (connection.isConnected) {
    console.log('=> Using existing connection.')
    return Models
  }

  await connectDB()

  connection.isConnected = true
  console.log('=> Created a new connection.')
  return Models
}
