const express = require('express')
const router = express.Router()

const connectToDatabase = require('../db/index')
// {
//   "logo": "images/company.png",
//   "phone": 999999999,
//   "palette": {
//     "primary": "#00000",
//     "secondary": "#00000",
//   },
//   "socialMedia": [
//     {
//       "icon": "facebook",
//       "label": "Facebook",
//     },
//   ],
//   "webPages": ["http://example.com", "http://example.com"],
// }

// Ruta para obtener la empresa
router.get('/company', async (req, res) => {
  try {
    const { Company } = await connectToDatabase()
    const company = await Company.findAll()
    if (!company) {
      res.status(404).send('No se encontraron empresas')
    }
    res.json(company)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// Ruta para obtener todas las recomepensas
router.get('/rewards', async (req, res) => {
  try {
    const { Reward } = await connectToDatabase()
    const rewards = await Reward.findAll()
    res.json(rewards)
  } catch (err) {
    console.error(err)
    res.status(500).send('Error al obtener las recompensas')
  }
})

module.exports = router
