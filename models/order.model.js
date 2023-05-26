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
    customerName: {
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
};

const ActiveOrder = sequelize.define("ActiveOrder", config, {
    timestamps: true,
});
const FinishedOrder = sequelize.define("FinishedOrder", config, {
    timestamps: true,
});

module.exports = { ActiveOrder, FinishedOrder };
