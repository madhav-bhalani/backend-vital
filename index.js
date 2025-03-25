const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const Product = require('./models/products')
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./models/users')

const jwt = require('jsonwebtoken');
const key = 'santaClause90*32@@';



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


//REGISTER ROUTE
app.post('/register', async(req,res)=>{
    try{
        const {fname, lname, email, phone, password} = req.body;
        const hash = await bcrypt.hash(password, 12);
        const user = await User.findOne({$or: [
            {email: email},
            {phone: phone}
        ]});
        if(user){
            console.log('User already exists');
        }
        else{
            const newUser =  new User({firstName: fname, lastName: lname, email: email, phone: phone, password: hash});
            console.log(newUser);
            await newUser.save();
            // res.send('User added');
            res.redirect('http://localhost:5173/');
        }
    }
    catch(err){
        console.log('Error while registering user');
        console.log(err);
    }
});


//LOGIN ROUTE
app.post('/login', async(req,res)=>{
    try{
        const{username, password} = req.body;
        const user = await User.findOne({$or: [
            {phone: username},
            {email: username}
        ]});  
        if(!user){
            res.send('Please create an account to login');
        }  
        else{
            const verifyPass = await bcrypt.compare(password, user.password);
            if(verifyPass){
                jwt.sign({user}, key, (err, token)=>{
                    if(err){
                        return res.status(500).send('something went wrong!!');
                    }
                    res.cookie('auth', token, {
                        httpOnly: true,
                        secure: false,
                        maxAge: 50000,
                        sameSite: 'Lax',
                        // expires: new Date(Date.now() * 50000)
                    });
                    res.json({message: 'Logged in!!', user});
                });
            }
            else{
                res.send('please enter a correct password');
            }
        }
        
    }
    catch(err){
        console.log('Error while logging in');
        console.log(err);
    }
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})