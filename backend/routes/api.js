const express = require('express')
const router = express.Router()

const connectToDatabase = require('../db/index')
// {
//   "logo": "image.png",
//   "phone": "9999999",
//   "palette": {
//     "primary": "#00000",
//     "secondary": "#00000",
//   },
//   "socialMedia": [
//     {
//       "icon": "facebook",
//       "label": "Facebook",
//     }
//   ],
//   "webPages": ["http://example.com", "http://example.com"]
// }

// Ruta para obtener la empresa
router.get('/company', async (req, res) => {
  try {
    const { Company } = await connectToDatabase()
    const company = await Company.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    })
    if (!company) {
      res.status(404).send('No se encontraron empresas')
    }
    res.json(company)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})
// Ruta para obtener todas las categorias de recomepensas
router.get('/reward-categories', async (req, res) => {
  try {
    const { RewardCategory } = await connectToDatabase()
    const rewards = await RewardCategory.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    })
    if (!rewards) {
      res.status(404).send('No se encontraron empresas')
    }
    res.json(rewards)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error al obtener las recompensas')
  }
})

// Ruta para obtener todas las recomepensas
router.get('/rewards', async (req, res) => {
  try {
    const { reward_category } = req.query
    const { Reward } = await connectToDatabase()
    const rewards = await Reward.findAll({
      where: { reward_category_id: reward_category },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    })
    if (!rewards) {
      res.status(404).send('No se encontraron empresas')
    }
    res.json(rewards)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error al obtener las recompensas')
  }
})

// Ruta para obtener un producto por su codigo
router.get('/products', async (req, res) => {
  try {
    const { code } = req.query
    const { Product, Capacity } = await connectToDatabase()
    const product = await Product.findOne({
      where: { code },
      include: [
        {
          model: Capacity,
          as: 'capacity',
        },
      ],
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    })
    if (!product) {
      res.status(404).send('No se encontraron empresas')
    }
    res.json(product)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error al obtener las recompensas')
  }
})

// Ruta alamcenar un movimiento
router.get('/movements', async (req, res) => {
  try {
    const { Movement } = await connectToDatabase()
    if (!req.body) {
      return res.status(400).send('Datos del movimiento son requeridos')
    }
    const newMovement = await Movement.create(req.body)
    res.status(201).json(newMovement)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error al obtener las recompensas')
  }
})

module.exports = router
