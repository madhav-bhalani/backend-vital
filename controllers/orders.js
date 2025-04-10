const Order = require("../models/orders");
const Shopping = require("../models/shopping");
const User = require("../models/users");

module.exports.placeOrder = async (req, res) => {
  try {
    const userId = req.user._id;
    const shopping = await Shopping.findOne({ userId: userId }).populate(
      "cartItems.productId"
    );
    console.log("HG cart items: ", shopping);
    const cartItems = shopping.cartItems;
    if (cartItems.length === 0) {
      return res
        .status(404)
        .json({ message: "No items in cart to place order" });
    } else {
      const products = cartItems.map((item) => item.productId._id);
      const orderAmount = cartItems.reduce((total, item) => {
        // console.log('price: ', item.productId.price);
        return total + item.productId.price?.productPrice * item.itemQuantity;
      }, 0);
      const order = new Order({
        products: products,
        user: userId,
        orderStatus: "placed",
        orderAmount: orderAmount,
      });
      await order.save();
      shopping.cartItems = [];
      await shopping.save();
      console.log("cart after order:", shopping);
      res.status(201).json({ message: "Order placed successfully", order });
    }
  } catch (err) {
    console.log("Error while placing order: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.changeOrderStatus = async (req, res) => {
  try {
    const orderId = req.body.orderId;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    if (order.orderStatus === "cancelled") {
      return res
        .status(400)
        .json({ message: "Cannot change status of cancelled order" });
    }
    if (order.orderStatus === "delivered") {
      return res
        .status(400)
        .json({ message: "Cannot change status of delivered order" });
    } else {
      const orderStatus = req.body.orderStatus;
      order.orderStatus = orderStatus;
      await order.save();
      res
        .status(200)
        .json({ message: "Order status updated successfully", order });
    }
  } catch (err) {
    console.log("Error while changing order status: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getOrders = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);
    if (user.isAdmin === true) {
      const orders = await Order.find({});
      if (!orders || orders.length === 0) {
        return res.status(404).json({ message: "No orders found" });
      } else {
        res
          .status(200)
          .json({ message: "Orders fetched successfully", orders });
      }
    } else {
      const orders = await Order.find({ user: userId });
      if (!orders || orders.length === 0) {
        return res.status(404).json({ message: "No orders found" });
      } else {
        res
          .status(200)
          .json({ message: "Orders fetched successfully", orders });
      }
    }
  } catch (err) {
    console.log("Error while fetching orders: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getOrderDetails = async (req, res) => {
    try{
        const orderId = req.body.orderId;
        const order = await Order.findById(orderId).populate('products');
        if(!order){
            res.status(404).json({message: 'No order found'});
        }
        else{
            res.status(200).json({message: 'order detailes fetched successfully', order})
        }
    }catch(err){
        console.log('Error in fetching order details', err);
        res.status(500).json({error: 'Internal Server Error'});
    }
}