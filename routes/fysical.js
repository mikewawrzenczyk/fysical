const express = require('express')
const router = express.Router()
const fysicalController = require('../controllers/fysical') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, fysicalController.getData)


router.post('/addWeight', fysicalController.addWeight)

// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router