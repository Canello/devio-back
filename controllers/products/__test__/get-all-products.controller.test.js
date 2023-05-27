const request = require("supertest");
const { app } = require("../../../app");
const { Product } = require("../../../models/product.model");

it("returns all products from collection", async () => {
    const products = [
        {
            name: "X Salada",
            category: "combos",
            description: "Hambúrguer, queijo e salada.",
            price: 20.5,
            imageUrl: "",
        },
        {
            name: "Coca-Cola",
            category: "drinks",
            description: "Lata 350ml.",
            price: 5.5,
            imageUrl: "",
        },
    ];

    const product1 = new Product(products[0]);
    await product1.save();
    const product2 = new Product(products[1]);
    await product2.save();

    const response = await request(app).get("/products").expect(200);
    const allProducts = response.body.data.products;

    expect(allProducts.length).toEqual(2);
});
