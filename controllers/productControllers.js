const  productModel = require("../models/product")

exports.createProduct = async(req,res) => {

        const product = productModel.create({
            product_name: req.body.product_name,
            product_price: req.body.product_price,
            isInStock: req.body.isInStock,
            category: req.body.category
        })
        console.log(product);

        return res.status(201).json({message: "Product Created"})
    }

exports.getallProducts = async(req,res) => {

        const allProduct = await productModel.find({})
        return res.json(allProduct)
    }

exports.getById = async(req,res) => {
        const product = await productModel.findById(req.params.id)
        return res.json(product);
    }

exports.updateProduct = async(req,res) => {
        const updatedProduct = await productModel.findByIdAndUpdate(req.params.id,req.body)
        return res.json(updatedProduct)
    }

exports.deleteProduct = async(req,res) => {
        const deletedProduct = await productModel.findOneAndDelete(req.param.id)
        return res.json(deletedProduct)
    }