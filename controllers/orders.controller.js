const { Product } = require("../models/product.model");
const { ActiveOrder, FinishedOrder } = require("../models/order.model");

exports.getActiveOrders = async (req, res) => {
    // Get all active orders
    // Respond with them
};

exports.createOrder = async (req, res) => {
    // Validate request
    // Create order
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
