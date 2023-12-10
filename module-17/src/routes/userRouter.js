const express = require('express')
const router = express.Router()

const {userProfile, userSignUp, userLogin} = require('../controllers/userController')

router.get('/profile', userProfile)
router.post('/signup', userSignUp)
router.post('/login', userLogin)

module.exports = router;