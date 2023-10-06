const app = require("./app");
const dotenv = require("dotenv");
const dbConnection = require("./config/db");


dotenv.config({path: "Backend/config/config.env"});

dbConnection();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});