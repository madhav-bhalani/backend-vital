const Shopping = require("../models/shopping");

// module.exports.addItems = async (req,res) => {
//     try{
//         const id = req.params.id;
//         const items = JSON.parse(req.cookies.cartItems);
//         console.log('cart data recieved from cookies: ',items);
//         if(req.user._id.toString() !== id){
//             return res.status(403).json({ error: "Forbidden: Access denied" });
//         }
//         else{
//             const cart = await Shopping.findOne({userId: id});
//             if(cart){
//                 const updatedCart = await Shopping.findByIdAndUpdate(cart._id, {items: items}, {new: true});
//                 console.log('updated cart: ',updatedCart);
//                 res.status(200).json(updatedCart);
//             }
//             else{
//                 const newCart = new Shopping({userId: id, items: items});
//                 await newCart.save();
//                 console.log('new cart created: ',newCart);
//                 res.status(200).json(newCart);
//             }
//         }
//     }
//     catch(err){
//         console.log('Error while adding items to cart: ');
//         console.log(err);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// }

module.exports.addItems = async (req, res) => {
  try {
    const userId = req.user._id;
    const cartItems = JSON.parse(req.body.cartItems);
    console.log("cart data received from request body: ", cartItems);
    console.log("userId: ", userId);
    const shopping = await Shopping.findOne({ userId: userId });
    if (shopping) {
      shopping.cartItems = cartItems;
      await shopping.save();
      res.status(200).json({ message: "added to cart", shopping });
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
