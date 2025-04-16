const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController')
const rewardController = require('../controllers/rewardsController')
const pageController = require('../controllers/pageController')
const productController = require('../controllers/productController')
const aecoController = require('../controllers/aecoController')
// const movementController = require('../controllers/movementController')
const paperController = require('../controllers/paperController')
const ticketController = require('../controllers/ticketController')

router.get('/company', companyController.getCompany)

router.get('/rewards/categories', rewardController.getRewardsByType)

router.get('/rewards', rewardController.getRewardsByType)

router.get('/products', productController.getByCode)

router.get('/pages', pageController.getPageByName)

router.get('/aeco', aecoController.getAecoUpdate)

router.post('/tickets', ticketController.create)

router.get('/paper', paperController.getActive)

router.put('/paper', paperController.update)

// router.post('/printer-ticket', ticketController.print)

module.exports = router
