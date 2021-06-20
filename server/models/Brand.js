const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BrandSchema = new Schema ({
    brand_name: {
        type: String,
        required: true,
    },
    brand_description: {
        type: String,
        required: true
    },
    brand_img: {
        type: String
    },
    status: {
        type: String,
        enum: ['Enable', 'Disable']
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('brands', BrandSchema)