const User = require('../models/users');
const jwt = require("jsonwebtoken");
const key = "santaClause90*32@@";

module.exports.reqAuth = async (req, res, next) => {
    try {
      console.log(req.cookies);
      const token = req.cookies.auth;
      if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
      }
      const decoded = jwt.verify(token, key);
      const user = await User.findById(decoded.user._id);
      if (!user) {
        return res.status(401).json({ error: "Unauthorized: User not found" });
      }
      req.user = user;
      next();
    } catch (err) {
      console.error("Authentication error:", err);
      res.status(401).json({ error: "Unauthorized" });
    }
  };