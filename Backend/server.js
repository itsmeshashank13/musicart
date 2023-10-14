const app = require("./app");
const dotenv = require("dotenv");
const dbConnection = require("./config/db");


dotenv.config({path: "./config/config.env"});

dbConnection();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on https://localhost:${process.env.PORT}`)
});