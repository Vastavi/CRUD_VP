const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema
(
    {
        name: 
        {
            type: String,
            required: [true, "Please enter a product name"],
        },

        quanity:
        {
            type: Number,
            required: true,
            default: 0
        },

        price:
        {
            type: Number,
            required: true,
            default: 0
        },

    //    category:
    //    {
    //     type: String,
    //     required: [true, "Add a description"],
    //    },

        image:
        {
            type: String,
            required: false
        },
    },
    {
        timestamps: true  
    }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;