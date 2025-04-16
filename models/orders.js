const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

const orderSchema = new Schema ({
    
    orderItems:[
        {
            productId: {
                type: objectId,
                ref: 'Product'
            },
            itemQuantity: {
                type: Number,
                required: true,
                min: 1
            }
        }
    ],
    user: {
        type: objectId,
        ref: 'User'
    },
    orderStatus: {
        type: String,
        enum: ['placed', 'dispatched', 'shipped', 'in-transit', 'out for delivery', 'delivered', 'cancelled', 'processing'],
        required: true,
        lowercase: true
    },
    orderAmount: {
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now 
    },
    shippingAddress:{
        type: objectId,
        ref: 'Address',
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;