const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['Enable', 'Disable']
    },
    //get role id
    role: {
        type: Schema.Types.ObjectId,
        ref: 'roles'
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', UserSchema)