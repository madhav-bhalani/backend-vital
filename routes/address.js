const express = require("express");
const router = express.Router();
const address = require("../controllers/address");
const { reqAuth } = require("../middlewares/auth");

router.post("/address", reqAuth, address.addNewAddress);

router.get("/address", reqAuth, address.getAddress);

router.put("/address", reqAuth, address.editAddress);

module.exports = router;
