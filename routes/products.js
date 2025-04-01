const express = require("express");
const router = express.Router();
const products = require("../controllers/products");
const multer = require('multer');
const { storage } = require('../cloudinary/index');

const upload = multer({ storage: storage });

// const upload = multer({
//     storage,
//     fileFilter: (req, file, cb) => {
//       const allowedFormats = ["jpeg", "png", "jpg", "webp"];
//       const fileExt = file.originalname.split(".").pop().toLowerCase();
//       if (allowedFormats.includes(fileExt)) {
//         cb(null, true);
//       } else {
//         cb(new Error("Invalid file format"), false);
//       }
//     },
//   }).fields([{ name: "productImages", maxCount: 1 }]);

router.get("/:ctg",products.displayProducts);

router.post('/new', upload.array('images'), products.addNewProduct);

module.exports = router;
