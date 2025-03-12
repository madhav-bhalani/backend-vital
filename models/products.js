const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    brandName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['protein', 'gainer', 'pre post workout', 'vitamin supplement', 'active wear'],
        lowercase: true,
        required: true
    },
    productDetails: {
        description: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aliquam, libero recusandae sapiente reprehenderit, atque perspiciatis fuga, voluptate in iste dolor minima id.'
        },
        colors: {
            type: [String],
            enum: ['white', 'black', 'red', 'navy blue', 'grey'],
            lowercase: true,
            required: function() { return this.category === 'active wear'; } 
        },
        flavours: {
            type: [String],
            enum: ['chocolate', 'strawberry', 'mango', 'unflavoured'],
            lowercase: true,
            required: function() { return ['protein', 'gainer', 'pre post workout', 'vitamin supplement'].includes(this.category); } // Required only for supplements
        }
    },
    sizes: {
        shirtSize: {
            type: [String], 
            enum: ['s', 'm', 'l', 'xl', '2xl'],
            lowercase: true,
            required: function() { return this.category === 'active wear'; } 
        },
        weight: {
            type: [Number], 
            enum: [250, 500, 1000, 2000, 4000],
            required: function() { return ['protein', 'gainer', 'pre post workout', 'vitamin supplement'].includes(this.category); } // Only for supplements
        }       
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 0 
    },
    stock: {
        inStock: {
            type: Boolean,
            default: true
        },
        quantity: {
            type: Number,
            min: 0,
            required: true
        }
    },
    price: {
        productPrice: {
            type: Number,
            required: true,
            min: 0
        },
        onSale: {
            type: Boolean,
            default: false
        }
    },
    createdAt: { 
        type: Date,
        default: Date.now
    }
});


const vitalProduct = mongoose.model('Product', productSchema);

module.exports = vitalProduct;
