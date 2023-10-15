const Product = require("../models/productModel");


//  Create Product -- Only Admin
exports.createProduct = async (req, res, next)=> {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })

};


//  Getting all Products
exports.getAllProducts = async(req, res) => {

    const products = await Product.find();

    res.status(204).json({
        success: true,
        products
    })
    
};


//  Update Product -- only admin
exports.updateProduct = async (req, res, next) =>{

    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success: true,
            message: "Product not found"
        })
    }

    product = await Product.findById(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(204).json({
        success: true,
        product
    });

};


//  Delete Product -- Admin
exports.deleteProduct = async (req, res, next) =>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success: false,
            message: "Product not found"
        })
    }

    await product.deleteOne();

    res.status(204).json({
        success: true,
        message: "Product has been deleted successfully"
    })

};