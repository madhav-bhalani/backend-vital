const Address = require("../models/address");
const User = require("../models/users");

module.exports.addNewAddress = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);
    const address = new Address({ userId: userId, ...req.body });
    await address.save();
    user.addresses.push(address._id);
    await user.save();
    res.status(200).json({ message: "address added!!", address });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
};

module.exports.editAddress = async (req, res) => {
  try {
    const userId = req.user._id;
    const addressId = req.body.id;
    const user = await User.findById(userId);
    const address = await Address.findById(addressId);
    if (!address) {
      res.status(404).json({ message: "address not found" });
    } else if (userId.toString() !== address.userId.toString()) {
      res
        .status(403)
        .json({ message: "you are not authorized to edit this address" });
    } else {
      const updatedAddress = await Address.findByIdAndUpdate(
        addressId,
        req.body,
        { new: true, runValidators: true }
      );
      res.status(200).json({ message: "address updated!!", updatedAddress });
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
};

module.exports.getAddress = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);
    if (!user.isAdmin) {
      const addresses = await Address.find({ userId: userId });
      if (!addresses || addresses.length === 0) {
        res.status(404).json({ message: "no addresses found" });
      } else {
        res.status(200).json(addresses);
      }
    } else {
      const addresses = await Address.find({});
      if (!addresses || addresses.length === 0) {
        res.status(404).json({ message: "no addresses found" });
      } else {
        res.status(200).json(addresses);
      }
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
};
