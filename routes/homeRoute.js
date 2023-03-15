const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const homeController = require('../controllers/homeController')

// Setup an "index" route for fruits, attach it to router along with the controller logic
router.get('/', homeController.index)


module.exports = router