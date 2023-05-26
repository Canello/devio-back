const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.config");

const config = {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    customer_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ordered_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
};

const ActiveOrder = sequelize.define("ActiveOrder", config);
const FinishedOrder = sequelize.define("FinishedOrder", config);

module.exports = { ActiveOrder, FinishedOrder };
