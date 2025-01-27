const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController')
const rewardController = require('../controllers/rewardsController')
const pageController = require('../controllers/pageController')
const productController = require('../controllers/productController')
const aecoController = require('../controllers/aecoController')
const movementController = require('../controllers/movementController')
const paperController = require('../controllers/paperController')

router.get('/company', companyController.getCompany)

router.get('/reward-categories', rewardController.getCategories)

router.get('/rewards', rewardController.getRewardsByCategory)

router.get('/products', productController.getByCode)

router.get('/pages', pageController.getPageByName)

router.get('/aeco', aecoController.getAecoUpdate)

router.post('/movements', movementController.create)

router.get('/paper', paperController.getActive)

router.put('/paper', paperController.update)

module.exports = router
