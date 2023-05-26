const { Product } = require("../models/product.model");
const { ActiveOrder, FinishedOrder } = require("../models/order.model");
const { OrderContent } = require("../models/order-content.model");

exports.getActiveOrders = (req, res) => {
    // Get orders flagged as "preparing" or "ready" on active db
    // Respond with two arrays of orders, one for "preparing" and the other for "ready"
    res.json("hi");
};

exports.createOrder = (req, res) => {
    // Validate request
    // Create order and save it on active db
    // Respond with created order
};

exports.updateOrder = (req, res) => {
    // If prepared -> ready
    //      Update value on active db
    // If ready -> picked_up
    //      Delete order from active db
    //      Create order on finished db
    // Respond with updated order
};

exports.cancelOrderController = (req, res) => {
    // Flag order as canceled
    // Delete order from active db
    // Create order on finished db
    // Respond with success
};
