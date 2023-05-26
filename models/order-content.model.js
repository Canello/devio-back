const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.config");

const OrderContent = sequelize.define(
    "OrderContent",
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        orderId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = { OrderContent };
