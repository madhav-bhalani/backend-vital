const Product = require("../models/products");

//display all products
 module.exports.allProducts = async (req, res) => {
  try{
    const products = await Product.find({});
    const productCount = await Product.find({}).countDocuments();
    if(productCount === 0) {
      return res.status(404).json({ message: "No products found" });
    }
    // console.log(products);
    else{
      res.status(200).json({products, productCount});
    }
  }
  catch(err){
    console.log("ERROR IN DISPLAYING ALL PRODUCTS");
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
} 

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
module.exports.displayById = async(req,res) => {
  try{
    const id = req.params.id;
    const product = await Product.findById(id);
    // console.log(product);
    if(!product){
      return res.status(404).json({message: 'No product found'});
    }
    else{
      res.status(200).json(product);
    }
  }catch(err){
    console.log('ERROR IN FINDING PRODUCT');
    console.log(err);
    res.status(404).json({error: 'No product found'});
  }
}

// Add new product
module.exports.addNewProduct = async (req, res) => {
  try {
    console.log(req.files);
    console.log(req.body);

    if (!req.files) {
      return res.status(400).json({ error: 'No valid images uploaded' });
    }

    const imageData = req.files.map(file => ({
      url: file.path,
      fileName: file.filename
    }));

    console.log("Image data :"+imageData);
    const product = new Product(req.body);
    product.images = imageData;

    await product.save();
    console.log(product);
    res.status(200).json({ message: 'Product added successfully' });
  } catch (err) {
    console.log("ERROR IN ADDING PRODUCT");
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
