const correctOrder = {
    code: 20,
    customerName: "Rodrigo",
    notes: "Sem pícles.",
    paymentType: "credit",
    received: 50,
    change: 4,
    content: [
        {
            product: {
                name: "X Salada",
                category: "combos",
                description: "Hambúrguer, queijo e salada.",
                price: 20.5,
                imageUrl: "/images/category-combos.png",
            },
            quantity: 2,
        },
        {
            product: {
                name: "Coca-Cola",
                category: "combos",
                description: "Lata 350ml.",
                price: 5,
                imageUrl: "",
            },
            quantity: 1,
        },
    ],
};

module.exports = { correctOrder };
