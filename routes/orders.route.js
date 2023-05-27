const { Router } = require("express");
const {
    getActiveOrders,
} = require("../controllers/orders/get-active-orders.controller");
const {
    createOrder,
} = require("../controllers/orders/create-order.controller");
const {
    updateOrder,
} = require("../controllers/orders/update-order.controller");
const {
    cancelOrderController,
} = require("../controllers/orders/cancel-order.controller");

const router = Router();

router.get("/", getActiveOrders);
router.post("/", createOrder);
router.patch("/:_id", updateOrder);
router.delete("/:_id", cancelOrderController);

module.exports = { ordersRouter: router };
