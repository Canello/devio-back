require("dotenv").config();
const mongoose = require("mongoose");
const { app } = require("./app");

const start = async () => {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);

    app.listen(process.env.PORT, () => {
        console.log("Listening on " + process.env.PORT);
    });
};

start();
