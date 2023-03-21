const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const blogController = require('../controllers/blogController')

// Setup an "index" route for fruits, attach it to router along with the controller logic
router.get('/', blogController.show)


module.exports = router