const express =require('express');
const { validateJwt } = require('../middlewares/jwt');
const { getProducts } = require('../controllers/productController');
const { userSignUp, userSignIn, userAddToCart } = require('../controllers/userController');
const router = express.Router();

// router.get('/', homeContr)
router.post('/signup', userSignUp);
router.post('/signin',userSignIn);
router.post('/add-to-cart',validateJwt , userAddToCart);
// router.get('/home',validateJWT, getProducts)

module.exports = router    