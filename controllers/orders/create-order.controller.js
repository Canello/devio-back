const { ActiveOrder } = require("../../models/order.model");

exports.createOrder = async (req, res) => {
    const { code, customerName, notes, content } = req.body;

    // Calculate total price of all products in order
    const totalPrice = content.reduce(
        (acc, el) => acc + el.product.price * el.quantity,
        0
    );

    // Save new order with status of "preparing" in active orders db
    const order = new ActiveOrder({
        code,
        customerName,
        notes,
        status: "preparing",
        totalPrice,
        content,
    });
    const createdOrder = await order.save();

    res.status(201).send({
        status: "ok",
        data: {
            order: createdOrder,
        },
    });
};
