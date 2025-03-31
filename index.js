const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const Product = require("./models/products");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const User = require("./models/users");
const jwt = require("jsonwebtoken");
const key = "santaClause90*32@@";

const productRoutes = require("./routes/products");

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your specific origin
  credentials: true,
  // optionsSuccessStatus: 200
};

const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

mongoose
  .connect("mongodb://127.0.0.1:27017/vital-gear")
  .then(() => {
    console.log("Connection Open...");
  })
  .catch((err) => {
    console.log("Ohhhh noooo errorrrr");
    console.log(err);
  });

const reqAuth = async (req, res, next) => {
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

//check if user is admin
const isAdmin = async (req, res, next) => {
  try {
    const { email, phone } = req.user;
    if (email === "admin@admin.com" && phone === "123456790") {
      next();
    } else {
      res.status(403).json({ error: "Forbidden: Admin access required" });
    }
  } catch (err) {
    console.error("Authorization error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//display Products
// app.get("/products/:ctg", products.displayProducts);

//search route
app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/searchResults", async (req, res) => {
  try {
    const search = req.body.name;
    const results = await Product.find({
      $or: [
        { productName: { $regex: new RegExp(search, "i") } },
        { brandName: { $regex: new RegExp(search, "i") } },
        { category: search },
      ],
    });
    console.log(results);
    res.render("searchResults", { results });
  } catch (err) {
    console.log("Error while searching: ");
    console.log(err);
  }
});

//REGISTER ROUTE
app.post("/register", async (req, res) => {
  try {
    const { fname, lname, email, phone, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = await User.findOne({
      $or: [{ email: email }, { phone: phone }],
    });
    if (user) {
      console.log("User already exists");
    } else {
      const newUser = new User({
        firstName: fname,
        lastName: lname,
        email: email,
        phone: phone,
        password: hash,
      });
      console.log(newUser);
      await newUser.save();
      // res.send('User added');
      res.redirect("http://localhost:5173/");
    }
  } catch (err) {
    console.log("Error while registering user");
    console.log(err);
  }
});

//LOGIN ROUTE
app.post("/login", async (req, res, next) => {
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
});

//LOGOUT ROUTE
app.post("/logout", reqAuth, (req, res, next) => {
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
});

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
