const Shopping = require("../models/shopping");

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
