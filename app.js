const express = require("express");
const cors = require("cors");

const { ordersRouter } = require("./routes/orders.route");
const { errorHandler } = require("./middlewares/error-handler.middleware");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/orders", ordersRouter);

app.all("*", (req, res) => {
    throw new Error("Não encontrado.");
});

app.use(errorHandler);

module.exports = { app };
