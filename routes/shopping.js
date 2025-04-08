const express = require("express");
const router = express.Router();
const shopping = require("../controllers/shopping");
const { reqAuth } = require("../middlewares/auth");

router.post("/shopping/cart", reqAuth, shopping.addItems);

module.exports = router;
