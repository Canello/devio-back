require("express-async-errors");
const express = require("express");
const cors = require("cors");
const { ordersRouter } = require("./routes/orders.route");
const { productsRouter } = require("./routes/products.route");
const { errorHandler } = require("./middlewares/error-handler.middleware");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/orders", ordersRouter);
app.use("/products", productsRouter);

app.all("*", (req, res, next) => {
    throw new Error("Não encontrado.");
});

app.use(errorHandler);

module.exports = { app };
