const express = require("express");
const router = express.Router();
const products = require("../controllers/products");

router.get("/:ctg", products.displayProducts);

router.post('/new');

module.exports = router;
