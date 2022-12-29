const express =require('express');
const { AdminSignUp, AdminSignIn } = require('../controllers/AdminController');
const router = express.Router();


router.post('/signup', AdminSignUp);
router.post('/signin', AdminSignIn);
// router.get('/home', ad)

module.exports = router