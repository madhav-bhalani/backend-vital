const Order = require("../models/orders");
const Shopping = require("../models/shopping");
const User = require("../models/users");

module.exports.placeOrder = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);
    const shippingAddress = req.body.address;
    // Find the shopping cart for the user and populate cart items
    const shopping = await Shopping.findOne({ userId: userId }).populate(
      "cartItems.productId"
    );

    console.log("Cart items: ", shopping);
    const cartItems = shopping.cartItems;

    // Check if the cart is empty
    if (cartItems.length === 0) {
      return res
        .status(404)
        .json({ message: "No items in cart to place order" });
    } else {
      // Map cart items to the orderItems structure
      const orderItems = cartItems.map((item) => ({
        productId: item.productId._id,
        itemQuantity: item.itemQuantity,
      }));

      // Calculate the total order amount
      const orderAmount = cartItems.reduce((total, item) => {
        return total + item.productId.price?.productPrice * item.itemQuantity;
      }, 0);

      // Create a new order
      const order = new Order({
        orderItems: orderItems, // Use the mapped orderItems
        user: userId,
        orderStatus: "placed",
        orderAmount: orderAmount,
        shippingAddress: shippingAddress,
      });

      // Save the order
      await order.save();

      // Link the order to the user
      user.orders.push(order._id);
      await user.save();
      console.log("Linked order ID with user successfully!");

      // Clear the shopping cart
      shopping.cartItems = [];
      await shopping.save();
      console.log("Cart after order:", shopping);

      // Respond with success
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
      const orders = await Order.find({})
        .populate("user")
        .populate("orderItems.productId");
      if (!orders || orders.length === 0) {
        return res.status(404).json({ message: "No orders found" });
      } else {
        res.status(200).json(orders);
      }
    } else {
      const orders = await Order.find({ user: userId })
        .populate("user")
        .populate("orderItems.productId");
      if (!orders || orders.length === 0) {
        return res.status(404).json({ message: "No orders found" });
      } else {
        res.status(200).json(orders);
      }
    }
  } catch (err) {
    console.log("Error while fetching orders: ", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getOrderDetails = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId).populate("shippingAddress")
      .populate("orderItems.productId")
      .populate("user");
    if (!order) {
      res.status(404).json({ message: "No order found" });
    } else if(user.isAdmin === true || order.user._id.toString() === userId.toString()) {
      res
        .status(200)
        .json({ message: "order detailes fetched successfully", order });
    }
    else {
      res.status(403).json({ message: "Forbidden: Access denied" });
    }
  } catch (err) {
    console.log("Error in fetching order details", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
