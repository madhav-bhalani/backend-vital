const Address = require("../models/address");
const User = require("../models/users");

module.exports.addNewAddress = async(req,res)=>{
    try{
        const userId = req.user._id;
        const address = new Address ({userId: userId, ...req.body});
        await address.save();
        res.status(200).json({message: 'address added!!', address});
    }catch(err){    
        console.log(err);
        res.status(400).json({error: err});
    }
}

module.exports.getAddress = async(req,res)=>{
    try{
        const userId = req.user._id;
        const addresses = await Address.find({userId: userId});
        if(!addresses ||addresses.length === 0){
            res.status(404).json({message: 'no addresses found'});
        }
        else{
            res.status(200).json(addresses);
        }
    }catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
}