const { Router } = require("express");
const {
    getAllProducts,
    createProduct,
} = require("../controllers/products.controller");

const router = Router();

router.get("/", createProduct);

module.exports = { productsRouter: router };
