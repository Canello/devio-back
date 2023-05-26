const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.config");

const Product = sequelize.define("Product", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.REAL,
        allowNull: false,
    },
    image_url: {
        type: DataTypes.STRING,
    },
});

module.exports = { Product };
