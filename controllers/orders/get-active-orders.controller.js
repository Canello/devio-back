const { ActiveOrder } = require("../../models/order.model");

exports.getActiveOrders = async (req, res) => {
    // Fetch all active orders
    const orders = await ActiveOrder.find({});

    res.status(200).send({
        status: "ok",
        data: {
            orders,
        },
    });
};
