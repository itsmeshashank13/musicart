const Product = require("../models/productModel");


//create product -- Only Admin
exports.createProduct = async (req, res, next)=> {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })

};


//getting all products
exports.getAllProducts = async(req, res) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    })
    
};


//Update Product -- only admin
exports.updateProduct = async (req, res, next) =>{

    let product = Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success: true,
            message: "Product not found"
        })
    }

};