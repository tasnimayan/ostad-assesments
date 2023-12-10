const express = require('express')
const router = express.Router()


const { ProductDetails, GetAllProducts } = require('../controllers/productController');
const { UserCart, AddToCart, RemoveFromCart, CheckOut} = require('../controllers/cartController');


router.get('/', GetAllProducts)
router.get('/:productId', ProductDetails)


router.post('/cart' ,UserCart)
router.post('/cart/:productId', AddToCart)
router.patch('/cart/:productId', RemoveFromCart)
router.post('/checkout', CheckOut)

module.exports = router;