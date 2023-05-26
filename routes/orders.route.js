const { Router } = require("express");
const {
    getActiveOrders,
    createOrder,
    updateOrder,
    cancelOrderController,
} = require("../controllers/orders.controller");

const router = Router();

router.get("/", getActiveOrders);
router.post("/", createOrder);
router.patch("/:id", updateOrder);
router.delete("/:id", cancelOrderController);

module.exports = { ordersRouter: router };
