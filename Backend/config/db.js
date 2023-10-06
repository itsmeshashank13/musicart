const mongoose = require("mongoose");


const dbConnection = ()=> {
    mongoose.connect(process.env.MONGODB_URL, { 
        useNewUrlParser: true ,
        useUnifiedTopology: true,
    })
    .then((data)=> {
        console.log(`Database connected successfully: ${data.connection.host}`)
    })
    .catch((err)=> {
        console.log(err)
    })
};

module.exports = dbConnection;