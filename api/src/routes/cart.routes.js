const router= require('express-promise-router')();
const cartController= require('../cotrollers/cart.controller')

router.post('/cart',cartController.addToCart)
router.get('/cart', cartController.listAllCart);
router.put('/cart/:id', cartController.updateCartById);
router.delete('/cart/:id', cartController.removeFromCart);

module.exports=router