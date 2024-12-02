const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController')
const rewardController = require('../controllers/rewardsController')
const pageController = require('../controllers/pageController')
const productController = require('../controllers/productController')
const aecoController = require('../controllers/aecoController')
const movementController = require('../controllers/movementController')

router.get('/company', companyController.getCompany)

router.get('/reward-categories', rewardController.getCategories)

// Ruta para obtener todas las recomepensas
router.get('/rewards', rewardController.getRewardsByCategory)

// Ruta para obtener un producto por su codigo
router.get('/products', productController.getByCode)

// Get pages
router.get('/pages', pageController.getPageByName)

router.get('/aeco', aecoController.getAecoUpdate)

router.get('/movements', movementController.create)

module.exports = router
