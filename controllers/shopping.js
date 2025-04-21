const Shopping = require("../models/shopping");
const User = require("../models/users");

module.exports.addItems = async (req, res) => {
  try {
    const userId = req.user._id;
    const cartItems = JSON.parse(req.body.cartItems);
    console.log("cart data received from request body: ", cartItems);
    console.log("userId: ", userId);

    const shopping = await Shopping.findOne({ userId: userId });
    if (shopping) {
      cartItems.forEach((item) => {
        const existingItem = shopping.cartItems.find(
          (cartItem) =>
            cartItem.productId.toString() === item.productId.toString()
        );
        if (existingItem) {
          existingItem.itemQuantity += item.itemQuantity; // Update quantity if product exists
        } else {
          shopping.cartItems.push(item); // Add new product if it doesn't exist
        }
      });
      await shopping.save();
      res.status(200).json({ message: "item added to cart", shopping });
    } else {
      const newShopping = new Shopping({
        userId: userId,
        cartItems: cartItems,
      });
      await newShopping.save();
      res
        .status(201)
        .json({ message: "created new cart and added", newShopping });
    }
  } catch (err) {
    console.log("Error while adding items to cart: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getCartItems = async (req, res) => {
  try {
    const userId = req.user._id;
    const shopping = await Shopping.findOne({ userId: userId }).populate(
      "cartItems.productId"
    );
    if (shopping) {
      res.status(200).json({
        message: "Your shopping cart details",
        cartItems: shopping.cartItems,
        cartId: shopping._id,
      });
      console.log("cart items: ", shopping.cartItems);
    } else {
      res.status(404).json({ message: "No cart found for this user" });
    }
  } catch (err) {
    console.log("Error while getting cart items: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.removeCartItem = async (req, res) => {
  try {
    const userId = req.user._id;
    const id = req.params.id;
    console.log("productId: ", id);

    const shopping = await Shopping.findOne({ userId: userId });

    if (shopping) {
      const existingItem = shopping.cartItems.find((item) => {
        return item.productId.toString() === id.toString();
      });

      if (!existingItem) {
        return res.status(404).json({ message: "No such product in cart" });
      }

      const cartItems = shopping.cartItems.filter((item) => {
        return item.productId.toString() !== id.toString();
      });
      shopping.cartItems = cartItems;
      await shopping.save();
      res.status(200).json({ message: "Item removed from cart", shopping });
    } else {
      res.status(404).json({ message: "No cart found for this user" });
    }
  } catch (err) {
    console.log("Error while removing cart item: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.checkout = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.find({ _id: userId })
      .populate("orders")
      .populate("addresses");
    const shopping = await Shopping.findOne({ userId: userId }).populate(
      "cartItems.productId"
    );
    if (shopping && user) {
      res.status(200).json({
        message: "your checkout info",
        cartItems: shopping.cartItems,
        cartId: shopping._id,
        userData: user,
      });
      // console.log('HG items: ', shopping.cartItems);
    } else {
      res.status(404).json({ message: "No data for this user" });
    }
  } catch (err) {
    console.log("Error while getting cart items: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
