// Routes for '/api/products'

const express = require('express');

const productController = require('../controllers/product');
const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getOneProductById);
router.put('/:id', productController.addOnProduct);
router.delete('/:id', productController.removeOneProductById);

module.exports = router;