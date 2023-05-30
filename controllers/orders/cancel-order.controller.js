const { ActiveOrder, FinishedOrder } = require("../../models/order.model");

exports.cancelOrderController = async (req, res) => {
    const { _id } = req.params;

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

    // Create order on finished db flagged as "deleted"
    const order = new FinishedOrder({
        code,
        customerName,
        notes,
        status: "deleted",
        totalPrice,
        content,
        paymentType,
        received,
        change,
    });
    await order.save();

    // Respond with success
    res.status(200).send({
        status: "ok",
    });
};
