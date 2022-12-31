const express =require('express');
const { validateJwt } = require('../middlewares/jwt');
const { AdminSignUp, AdminSignIn } = require('../controllers/adminController');
const { getProducts, createProduct } = require('../controllers/productController');
const router = express.Router();


router.post('/signup', AdminSignUp);
router.post('/signin', AdminSignIn);
router.post('/create-product', createProduct)
router.get('/get-products', getProducts );



// router.get('/home', ad)

module.exports = router