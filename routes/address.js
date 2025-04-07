const express = require("express");
const router = express.Router();
const address = require("../controllers/address");


router.post("/address", address.addNewAddress);

module.exports = router;