const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CustomerSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    customer_fullname: {
        type: String,
        required: true
    },
    customer_phone: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['Enable', 'Disable']
    },
    //get role id
    address: {
        type: Schema.Types.ObjectId,
        ref: 'addresses'
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('customers', CustomerSchema)