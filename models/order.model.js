const mongoose = require("mongoose");

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
            type: Array,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const ActiveOrder = mongoose.model("ActiveOrder", orderSchema);
const FinishedOrder = mongoose.model("FinishedOrder", orderSchema);

module.exports = { ActiveOrder, FinishedOrder };
