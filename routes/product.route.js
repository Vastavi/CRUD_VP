const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct,tryingProduct} = require('../controllers/product.controller.js')

router.get('/', getProducts);

router.get('/:id', getProduct);

router.post('/', createProduct);

//update
router.put('/:id', updateProduct)

//delete
router.delete('/:id', deleteProduct)

//search category
router.get('/:category', tryingProduct)


module.exports = router;
