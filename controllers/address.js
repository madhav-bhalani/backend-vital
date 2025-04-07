const Address = require("../models/address");

module.exports.addNewAddress = async(req,res)=>{
    try{
        const address = new Address (req.body);
        res.status(200).json({message: 'address added!!', address});
        await address.save();
    }catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
}