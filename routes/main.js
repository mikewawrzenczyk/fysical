const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const fysicalController = require('../controllers/fysical')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get("/fysical", ensureAuth, fysicalController.getData);
// router.get("/fysical", ensureAuth, postsController.getProfile);
router.get('/login', authController.getLogin)
//from POST form
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
//from POST of form
router.post('/signup', authController.postSignup)

module.exports = router