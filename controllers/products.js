const Product = require("../models/products");

//display all products
module.exports.displayProducts = async (req, res) => {
  try {
    const category = req.params.ctg;
    const products = await Product.find({ category: category });
    console.log(products);
    res.json(products);
  } catch (err) {
    console.log("ERROR IN DISPLAYING PRODUCTS");
    console.log(err);
  }
};

//add a new product
module.exports.addNewProduct = async (req, res) => {
  try {
    const product = new Product(req.body.product);
  } catch (err) {}
};
