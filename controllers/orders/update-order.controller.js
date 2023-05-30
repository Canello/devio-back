const { ActiveOrder, FinishedOrder } = require("../../models/order.model");

exports.updateOrder = async (req, res) => {
    // If prepared -> ready
    //      Update value on active db
    // If ready -> picked_up
    //      Delete order from active db
    //      Create order on finished db
    // Respond with updated order

    const { _id } = req.params;
    const { status } = req.body;

    let updatedOrder;
    if (status === "ready") {
        // Update value on active db
        await ActiveOrder.updateOne({ _id }, { status });
        updatedOrder = await ActiveOrder.findOne({ _id });
    } else if (status === "picked_up") {
        // Delete order from active db
        const deletedOrder = await ActiveOrder.findOneAndDelete({ _id });
        const {
            code,
            customerName,
            notes,
            totalPrice,
            content,
            paymentType,
            received,
            change,
        } = deletedOrder;

        // Create order on finished db
        const order = new FinishedOrder({
            code,
            customerName,
            notes,
            status: "picked_up",
            totalPrice,
            content,
            paymentType,
            received,
            change,
        });
        updatedOrder = await order.save();
    } else {
        throw new Error('"status" inválido.');
    }

    res.status(200).send({
        status: "ok",
        data: {
            order: updatedOrder,
        },
    });
};
