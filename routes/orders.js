const express = require("express");
const router = express.Router();
const order = require("../controllers/orders");
const { reqAuth, isAdmin } = require("../middlewares/auth");

router.post("/orders/place", reqAuth, order.placeOrder);

router.get("/orders", reqAuth,  order.getOrders);

router.post("/orders/changeStatus", reqAuth, isAdmin, order.changeOrderStatus);

router.get("/orders/details/:orderId", reqAuth, order.getOrderDetails);

module.exports = router;