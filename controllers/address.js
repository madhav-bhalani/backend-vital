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
    const { id, ...updateData } = req.body; // Extract `id` from the request body
    if (!id) {
      return res.status(400).json({ message: "Address ID is required" });
    }

    const address = await Address.findById(id);
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    const updatedAddress = await Address.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ message: "Address updated!", updatedAddress });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.message });
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
