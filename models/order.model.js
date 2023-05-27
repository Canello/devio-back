const mongoose = require("mongoose");
const { productSchema } = require("./product.model");

const contentSchema = new mongoose.Schema(
    {
        product: {
            type: productSchema,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    },
    {
        strict: true,
    }
);

const orderSchema = new mongoose.Schema(
    {
        code: {
            type: String,
            required: true,
        },
        customerName: {
            type: String,
            required: true,
        },
        notes: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        totalPrice: {
            type: Number,
            required: true,
        },
        content: {
            type: [contentSchema],
            required: true,
        },
    },
    {
        strict: true,
        timestamps: true,
        virtuals: true,
    }
);

const ActiveOrder = mongoose.model("ActiveOrder", orderSchema);
const FinishedOrder = mongoose.model("FinishedOrder", orderSchema);

module.exports = { ActiveOrder, FinishedOrder };
