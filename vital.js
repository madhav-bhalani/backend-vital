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
            weight: [500,1000]
        },
        stock: {
            quantity: 4,
        },
        price:{
            productPrice: 2500
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