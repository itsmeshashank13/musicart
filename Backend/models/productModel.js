const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, "Enter product name"],
        trim: true
    },
    description : {
        type: String,
        required: [true, "Enter product description"]
    },
    price : {
        type: Number,
        required: [true, "Enter product price"],
        maxLength: [8, "Price cannot exceed 8 characters"]
    },
    company : {
        type: String,
        required: [true, "Enter product company"]
    },
    color : {
        type: String,
        required: [true, "Enter product colour"]
    },
    category : {
        type: String,
        required: [true, "Enter product type"]
    },
    images : [
        {
            public_id:{
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            }
        }
    ] 
});


module.exports = mongoose.model("Product", productSchema);