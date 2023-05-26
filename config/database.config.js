const Sequelize = require("sequelize");

const dbPath = "db.sqlite";
const dbType = "sqlite";
const sequelize = new Sequelize(dbType + ":" + dbPath);
sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Tabelas prontas para uso.");
    })
    .catch((error) => {
        console.error("Erro ao criar tabelas.", error);
    });

module.exports = { sequelize };
