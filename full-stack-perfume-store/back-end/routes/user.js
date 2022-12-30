const express =require('express');
const { validateJWT } = require('../middlewares/jwt');
const { getProducts } = require('../controllers/productController');
const { userSignUp, userSignIn } = require('../controllers/userController');
const router = express.Router();

// router.get('/', homeContr)
router.post('/signup', userSignUp);
router.post('/signin', userSignIn);
// router.get('/home',validateJWT, getProducts)

module.exports = router  