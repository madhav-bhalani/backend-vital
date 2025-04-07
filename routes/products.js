const express = require("express");
const router = express.Router();
const products = require("../controllers/products");
const multer = require("multer");
const { storage } = require("../cloudinary/index");
const {reqAuth, isAdmin} = require("../middlewares/auth");

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

router.get("/", products.allProducts);

router.post("/", reqAuth, isAdmin, upload.array("images"), products.addNewProduct);

router.get("/:id", products.displayById);

router.get("/category/:ctg", products.displayProducts);

router.put("/:id", reqAuth, isAdmin, products.editProduct);

router.delete("/:id", reqAuth, isAdmin,  products.deleteProduct);

module.exports = router;
