const mongoose = require('mongoose')

//ProductSchema
const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    product_price: {
        type: String,
        required: true
    },
    isInStock: {
        type: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true 
    }

})


const productModel = mongoose.model('products', productSchema)