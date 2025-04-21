const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId

const userSchema = new Schema({
    firstName:{
        type: String,
        required: [true, 'Please enter your first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name']
    },
    email: {
        type: String,
        unique: [true, 'Email already exists']
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        unique: [true, 'Phone number already exists'],
        max: [10, 'Phone number cannot exceed 10 numbers']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        min: [8, 'Password should be atleast 8 characters']
    },
    orders: [
        {
            type: objectId,
            ref: 'Order'
        }
    ],
    isAdmin: {
        type: Boolean,
        default: false
    },
    addresses: [
        {
            type: objectId,
            ref: 'Address'
        }
    ] 
});

const User = mongoose.model('User', userSchema);

module.exports = User;