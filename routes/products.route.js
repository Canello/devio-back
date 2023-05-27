const { Router } = require("express");
const {
    getAllProducts,
} = require("../controllers/products/get-all-products.controller");

const router = Router();

router.get("/", getAllProducts);

module.exports = { productsRouter: router };
