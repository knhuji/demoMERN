const mongoose = require('mongoose');
const Schema = mongoose.Schema

const OrderDetailSchema = new Schema ({
    //get order id
    order: {
        type: Schema.Types.ObjectId,
        ref: 'orders'
    },
    //get product id
    product: {
        type: Schema.Types.ObjectId,
        ref: 'products'
    },
    product_qty: {
        type: number
    },
    price: {
        type: number,
        required: true
    },
    subTotal: {
        type: number,
        required: true
    },
})

module.exports = mongoose.model('orderDetails', OrderDetailSchema)