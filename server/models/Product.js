const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ProductSchema = new Schema ({
    product_name: {
        type: String,
        required: true
    },
    product_description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    product_quantity: {
        type: Number
    },
    product_img: {
        type: String
    },
    status: {
        type: String,
        enum: ['Enable', 'Disable']
    },
    //get brand id
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'brands'
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('products', ProductSchema)