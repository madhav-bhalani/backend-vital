const mongoose = require('mongoose');
const vitalProduct = require('./models/products');


mongoose.connect('mongodb://127.0.0.1:27017/vital-gear')
.then(()=>{
    console.log("Connection Open...");
})
.catch(err => {
    console.log("Ohhhh noooo errorrrr");
    console.log(err);
});

seedProducts = [
    {
        productName: 'Bizoyme Performance Whey',
        brandName: 'Muscle Blaze',
        category: 'protein',
        productDetails: {
            flavours: ['chocolate', 'mango']
        },
        sizes: {
            weight: [500, 1000]
        },
        stock: {
            quantity: 4
        },
        price: {
            productPrice: 2500
        }
    },
    {
        productName: 'Mass Gainer Xtreme',
        brandName: 'Optimum Nutrition',
        category: 'gainer',
        productDetails: {
            flavours: ['strawberry', 'chocolate']
        },
        sizes: {
            weight: [1000, 2000]
        },
        stock: {
            quantity: 10
        },
        price: {
            productPrice: 3500
        }
    },
    {
        productName: 'Pre-Workout Boost',
        brandName: 'Cellucor C4',
        category: 'pre post workout',
        productDetails: {
            flavours: ['mango', 'unflavoured']
        },
        sizes: {
            weight: [250, 500]
        },
        stock: {
            quantity: 6
        },
        price: {
            productPrice: 1800
        }
    },
    {
        productName: 'Multivitamin Pro',
        brandName: 'GNC',
        category: 'vitamin supplement',
        productDetails: {
            flavours: ['unflavoured']
        },
        sizes: {
            weight: [500, 1000]
        },
        stock: {
            quantity: 8
        },
        price: {
            productPrice: 1200
        }
    },
    {
        productName: 'VitalGear Performance T-Shirt',
        brandName: 'VitalGear',
        category: 'active wear',
        productDetails: {
            colors: ['black', 'grey']
        },
        sizes: {
            shirtSize: ['m', 'l', 'xl']
        },
        stock: {
            quantity: 20
        },
        price: {
            productPrice: 899
        }
    }
];

vitalProduct.insertMany(seedProducts) 
.then(()=>{
    console.log("Data added successfully...");
})
.catch(err=>{
    console.log("ERROR encountered:");
    console.log(err);
})