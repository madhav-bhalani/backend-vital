const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const Product = require("./models/products");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDoc = YAML.load("./swagger.yaml");

const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");

const corsOptions = {
  origin: "http://localhost:5173", // Replace with your specific origin
  credentials: true,
  // optionsSuccessStatus: 200
};

const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(cors(corsOptions));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

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

app.use("/products", productRoutes);
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
