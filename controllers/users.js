const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const key = "santaClause90*32@@";



module.exports.registerUser = async (req, res) => {
  try {
    console.log('HG BODY ', req.body);
    const { firstName, lastName, email, phone, password, confirmPass } = req.body;
    if(password !== confirmPass){
      res.status(400).json({message: "Please enter the same password as above"});
    }
    else{
      const hash = await bcrypt.hash(password, 12);
      const user = await User.findOne({
      $or: [{ email: email }, { phone: phone }],
      });
      if (user) {
        console.log("User already exists");
        res.status(409).json({message: "User already exists"});
      } else {
          const newUser = new User({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          password: hash,
        });
        console.log(newUser);
        await newUser.save();
        // res.send('User added');
        res.status(201).json({message: "User registered successfully"});
        // res.redirect("http://localhost:5173/");
      }
    } 
  }catch (err) {
    console.log("Error while registering user");
    console.log(err);
    // res.status(500).json({ error: "Regsitration failed!!" });
  }
}


module.exports.loginUser = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      // console.log("HG", username, password);
      const user = await User.findOne({
        $or: [{ phone: username }, { email: username }],
      });
      console.log(user);
      if (!user) {
        res.send("Please create an account to login");
      } else {
        console.log(req.body);
        const verifyPass = await bcrypt.compare(password, user.password);
        if (verifyPass) {
          jwt.sign({ user }, key, { expiresIn: "1d" }, (err, token) => {
            if (err) {
              return res.status(500).send("something went wrong!!");
            }
            res.cookie("auth", token, {
              httpOnly: true,
              secure: true,
              sameSite: "Lax",
              // expires: new Date(Date.now() * 50000)
            });
            res.json({ message: "Logged in!!", token, user });
          });
        } else {
          res.send("please enter a correct password");
        }
      }
    } catch (err) {
      console.log("Error while logging in");
      console.log(err);
    }
}


module.exports.logoutUser = async (req, res, next) => {
    try {
      res.clearCookie("auth", {
        httpOnly: true,
        secure: true,
        sameSite: "Lax",
      });
      console.log("Logout successful");
      res.status(200).json({ message: "Logout successful" });
    } catch (err) {
      console.error("Logout error:", err);
      res.status(500).json({ error: "Logout failed" });
    }
}