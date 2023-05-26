const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.config");

const OrderContent = sequelize.define("OrderContent", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    order_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    product_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = { OrderContent };
