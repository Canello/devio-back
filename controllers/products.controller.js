const { Product } = require("../models/product.model");

exports.getAllProducts = async (req, res) => {
    const products = await Product.findAll();

    res.status(200).send({
        status: "ok",
        data: {
            products,
        },
    });
};
