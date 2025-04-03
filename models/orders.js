const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

const orderSchema = new Schema ({
    products: [
        {
            type: objectId,
            ref: 'Product'
        }
    ],
    user: {
        type: objectId,
        ref: 'User'
    },
    orderStatus: {
        type: String,
        enum: ['placed', 'dispatched', 'in-transit', 'out for delivery', 'delivered', 'cancelled'],
        required: true,
        lowercase: true
    },
    orderAmount: {
        type: Number,
        required: true
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;