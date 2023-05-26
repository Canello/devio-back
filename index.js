require("dotenv").config();
const { app } = require("./app");

const start = () => {
    app.listen(process.env.PORT, () => {
        console.log("Listening on " + process.env.PORT);
    });
};

start();
