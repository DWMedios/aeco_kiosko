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
      return res.status(404).send({ message: 'No se encontraron empresas' })
    }
    return res.json(company)
  } catch (err) {
    console.error(err)
    return res.status(500).send({ message: 'Error al obtener la empresa' })
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
      return res.status(404).send({ message: 'No se encontraron categorías de recompensas' })
    }
    return res.json(rewards)
  } catch (err) {
    console.error(err)
    return res.status(500).send({ message: 'Error al obtener las categorías de recompensas' })
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
      return res.status(404).send({ message: 'No se encontraron recompensas' })
    }
    return res.json(rewards)
  } catch (err) {
    console.error(err)
    return res.status(500).send({ message: 'Error al obtener las recompensas' })
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
      return res.status(404).send({ message: 'No se encontraron productos' })
    }
    return res.json(product)
  } catch (err) {
    console.error(err)
    return res.status(500).send({ message: 'Error al obtener el producto' })
  }
})

// Ruta alamcenar un movimiento
// router.get('/movements', async (req, res) => {
//   try {
//     const { Movement } = await connectToDatabase()
//     if (!req.body) {
//       return res.status(400).send({ message: 'El cuerpo de la petición es requerido' })
//     }
//     const newMovement = await Movement.create(req.body)
//     return res.status(201).json(newMovement)
//   } catch (err) {
//     console.error(err)
//     return res.status(500).send('Error al obtener las recompensas')
//   }
// })


// Get pages
router.get('/pages', async (req, res) => {
  try {
    const { name } = req.query
    if (!name) {
      return res.status(400).send({ message: 'El parámetro "name" es requerido' })
    }
    const { Page } = await connectToDatabase()
    const page = await Page.findOne({
      where: { name },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    })
    if (!page) {
      return res.status(404).send({ message: 'No se encontraron páginas' })
    }
    return res.json(page)
  } catch (err) {
    console.error(err)
    return res.status(500).send({ message: 'Error al obtener la página' })
  }
})

module.exports = router
