const mongoose = require('mongoose')



const Products = new mongoose.Schema(
    {
        "title": String,
        "category": String,
        "subcategory": String,
        "subsubcategory": String,
        "description": String,
        "ingredients": String,
        "filename": String,
        "price": Number,
        "priceperunit": Number,
        "unit": String,
        "onSale": Boolean,
        "discount": String,
        "active": Boolean,
        "quantity": Number,
        "id": String,
        "articleNumber": String
    }
)   

module.exports = mongoose.model("Products", Products)