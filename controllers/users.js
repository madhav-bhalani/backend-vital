const User = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { findByIdAndUpdate } = require("../models/address");
const key = "santaClause90*32@@";

module.exports.registerUser = async (req, res) => {
  try {
    console.log("HG BODY ", req.body);
    const { firstName, lastName, email, phone, password, confirmPass } =
      req.body;
    if (password !== confirmPass) {
      res
        .status(400)
        .json({ message: "Please enter the same password as above" });
    } else {
      const hash = await bcrypt.hash(password, 12);
      const user = await User.findOne({
        $or: [{ email: email }, { phone: phone }],
      });
      if (user) {
        console.log("User already exists");
        res.status(409).json({ message: "User already exists" });
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
        res.status(201).json({ message: "User registered successfully" });
        // res.redirect("http://localhost:5173/");
      }
    }
  } catch (err) {
    console.log("Error while registering user");
    console.log(err);
    // res.status(500).json({ error: "Regsitration failed!!" });
  }
};

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
          res.json({
            message: "Logged in!!",
            token,
            user: {
              _id: user._id,
              firstName: user.firstName,
              lastName: user.lastName,
              isAdmin: user.isAdmin,
            },
          });
        });
      } else {
        res.send("please enter a correct password");
      }
    }
  } catch (err) {
    console.log("Error while logging in");
    console.log(err);
  }
};

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
};

module.exports.displayUser = async (req, res) => {
  try {
    const id = req.params.id;

    if (req.user._id.toString() !== id) {
      return res.status(403).json({ error: "Forbidden: Access denied" });
    }

    const user = await User.findById(id).populate('addresses');
    if (!user) {
      return res.status(404).json({ message: "No such user exists" });
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.log("ERROR IN FETCHING USER DATA");
    console.log(err);
    res.status(404).json({ error: "Unable to find user" });
  }
};

module.exports.editUser = async (req, res) => {
  try {
    console.log("HG body: ", req.body);
    const id = req.params.id;
    if (req.user._id.toString() !== id) {
      return res.status(403).json({ error: "Forbidden: Access denied" });
    }

    const userDetails = {};

    if (req.body.firstName) {
      userDetails.firstName = req.body.firstName;
    }

    if (req.body.lastName) {
      userDetails.lastName = req.body.lastName;
    }

    const loggedInUser = await User.findById(id);

    const email = req.body.email;

    if (email) {
      const foundUser = await User.findOne({ email: email });

      if (foundUser && foundUser.email !== loggedInUser.email) {
        return res
          .status(409)
          .json({ message: "Email already in use by another user" });
      } else {
        userDetails.email = email;
      }
    }

    const phone = req.body.phone;

    if (phone) {
      const foundUser = await User.findOne({ phone: phone });
      if (foundUser && foundUser.phone !== loggedInUser.phone) {
        return res
          .status(409)
          .json({ message: "Phone number already in use by another user" });
      } else {
        userDetails.phone = phone;
      }
    }

    const newPass = req.body.newPass;
    const password = req.body.password;

    if (newPass && password) {
      if (newPass !== password) {
        res.status(400).json({
          message: "Please enter the same password in both places",
        });
      } else {
        const hash = await bcrypt.hash(newPass, 12);
        userDetails.password = hash;
      }
    }

    const user = await User.findByIdAndUpdate(id, userDetails, {
      runValidators: true,
      new: true,
    });
    if (!user) {
      res.status(404).json({ message: "no such user exists" });
    } else {
      res
        .status(201)
        .json({ message: "User details updated successfully", user });
    }
  } catch (err) {
    console.log("ERROR IN UPDATING USER DETAILS");
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
