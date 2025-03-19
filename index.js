const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const Product = require('./models/products')
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/vital-gear')
.then(()=>{
    console.log("Connection Open...");
})
.catch(err => {
    console.log("Ohhhh noooo errorrrr");
    console.log(err);
});

//display Products
app.get('/displayProducts/:ctg', async(req,res)=>{
    try{
        const category = req.params.ctg;
        const products = await Product.find({category: category});
        res.json(products);
    }
    catch(err){
        console.log('ERROR IN DISPLAYING PRODUCTS')
        console.log(err);
    }
})


//search route
app.get('/search', (req,res)=>{
    res.render('search');
});

app.post('/searchResults', async(req,res)=>{
    try{
        const search = req.body.name;
        const results = await Product.find({$or: [{productName: {$regex: new RegExp(search, 'i')}}, {brandName: {$regex: new RegExp(search, 'i')}}, {category: search}]});
        console.log(results);
        res.render('searchResults', {results});
    }
    catch(err){
        console.log("Error while searching: ");
        console.log(err);
    }

  
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })