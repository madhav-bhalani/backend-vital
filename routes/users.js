const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const {reqAuth} = require("../middlewares/auth"); 

//REGISTER ROUTE
router.post("/register", users.registerUser);

//LOGIN ROUTE
router.post("/login", users.loginUser);

//LOGOUT ROUTE
router.post("/logout", reqAuth, users.logoutUser);

module.exports = router; 