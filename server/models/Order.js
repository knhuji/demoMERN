const mongoose = require('mongoose');
const Schema = mongoose.Schema

const OrderSchema = new Schema ({
    order_total: {
        type: number,
        required: true,
    },
    order_detail: {
        type: String
    },
    quantity: {
        type: number
    },
    //get customer id
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'customers'
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('orders', OrderSchema)