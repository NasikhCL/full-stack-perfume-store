const express =require('express');
const { userSignUp } = require('../controllers/userController');
const router = express.Router();


router.post('/signup', userSignUp)

module.exports = router