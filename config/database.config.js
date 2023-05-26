const Sequelize = require("sequelize");
const path = require("path");

const dbPath = path.join(__dirname, "..", "db.sqlite");
const dbType = "sqlite";
const sequelize = new Sequelize(dbType + ":" + dbPath);

module.exports = { sequelize };
