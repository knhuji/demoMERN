const mongoose = require('mongoose');
const Schema = mongoose.Schema

const RoleSchema = new Schema ({
    role_name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
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

module.exports = mongoose.model('roles', RoleSchema)