const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/farm')
.then(()=>{
    console.log("Connection Open...");
})
.catch(err => {
    console.log("Ohhhh noooo errorrrr");
    console.log(err);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })