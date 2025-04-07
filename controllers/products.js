const Product = require("../models/products");
const { ObjectId } = require("mongoose").Types;

//display all products
module.exports.allProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    // console.log(products);
    else {
      res.status(200).json(products);
    }
  } catch (err) {
    console.log("ERROR IN DISPLAYING ALL PRODUCTS");
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//display all products by category
module.exports.displayProducts = async (req, res) => {
  try {
    const category = req.params.ctg;
    const products = await Product.find({ category: category });
    // console.log(products);
    res.json(products);
  } catch (err) {
    console.log("ERROR IN DISPLAYING PRODUCTS");
    console.log(err);
  }
};

//display single product
module.exports.displayById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    // console.log(product);
    if (!product) {
      return res.status(404).json({ message: "No product found" });
    } else {
      res.status(200).json(product);
    }
  } catch (err) {
    console.log("ERROR IN FINDING PRODUCT");
    console.log(err);
    res.status(404).json({ error: "No product found" });
  }
};

// Add new product
module.exports.addNewProduct = async (req, res) => {
  try {
    console.log(req.files);
    console.log(req.body);

    if (!req.files) {
      return res.status(400).json({ error: "No valid images uploaded" });
    }

    const imageData = req.files.map((file) => ({
      url: file.path,
      fileName: file.filename,
    }));

    console.log("Image data :" + imageData);
    const product = new Product(req.body);
    product.images = imageData;

    await product.save();
    console.log(product);
    res.status(200).json({ message: "Product added successfully" });
  } catch (err) {
    console.log("ERROR IN ADDING PRODUCT");
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// edit product
module.exports.editProduct = async (req, res) => {
  try {
    console.log("HG body", req.body);
    const id = req.params.id;
    console.log(id);
    // console.log(req.body);
    const productName = req.body.productName;
    const brandName = req.body.brandName;
    const category = req.body.category;
    const description = req.body["productDetails.description"];
    const flavours = req.body["productDetails.flavours"];
    const colors = req.body["productDetails.colors"];
    const weight = req.body["sizes.weight"];
    const shirtSize = req.body["sizes.shirtSize"];
    const productPrice = parseInt(req.body["price.productPrice"]);
    const onSale = req.body["price.onSale"];
    console.log("HG category: ", category);
    console.log("HG price: ",productPrice);
    if (!ObjectId.isValid(id)) {
      res.status(400).json({ message: "No such product exists" });
    } else {
      const product = await Product.findByIdAndUpdate(
        id,
        {
          productName: productName,
          brandName: brandName,
          category: category,
          productDetails: {
            description: description,
            flavours: flavours,
            colors: colors,
          },
          sizes: {
            weight: weight,
            shirtSize: shirtSize,
          },
          price: {
            productPrice: productPrice,
            onSale: onSale,
          },
        },
        {
          runValidators: true,
          new: true,
        }
      );
      if (!product) {
        res.status(404).json({ message: "no such product available" });
      } else {
        res
          .status(200)
          .json({ message: "product details updated successfully" });
      }
    }
  } catch (err) {
    console.log("ERROR IN ADDING PRODUCT");
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ObjectId.isValid(id)) {
      res.status(400).json({ message: "No such product exists" });
    } else {
      const product = await Product.findByIdAndDelete(id);
      if (!product) {
        res.status(404).json({ message: "no such product available" });
      } else {
        res.status(200).json({ message: "product deleted successfully" });
      }
    }
  } catch (err) {
    console.log("ERROR IN DELETING PRODUCT");
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
