const express =require('express');
const { validateJwt } = require('../middlewares/jwt');
const { getProducts } = require('../controllers/productController');
const { userSignUp, userSignIn, userAddToCart, verify, userCart } = require('../controllers/userController');
const router = express.Router();

// router.get('/', homeContr)
// router.get('/verify', verify);
router.post('/signup', userSignUp);
router.post('/signin',userSignIn);
router.get('/cart',validateJwt, userCart)

router.post('/add-to-cart',validateJwt , userAddToCart);
// router.get('/home',validateJWT, getProducts)

module.exports = router    