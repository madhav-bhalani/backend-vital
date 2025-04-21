const express = require("express");
const router = express.Router();
const shopping = require("../controllers/shopping");
const { reqAuth } = require("../middlewares/auth");

router.post("/cart", reqAuth, shopping.addItems);

router.get("/cart", reqAuth, shopping.getCartItems); 

router.delete("/cart/:id", reqAuth, shopping.removeCartItem);

router.get('/checkout', reqAuth, shopping.checkout);

module.exports = router;
