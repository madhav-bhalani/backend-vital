const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: {
    type: String,
    required: [true, 'Please specify a productName for the product'],
  },
  brandName: {
    type: String,
    required: [true, 'Please specify a brandName for the product'],
  },
  category: {
    type: String,
    enum: [
      "protein",
      "gainer",
      "pre-workout",
      "post-workout",
      "vitamin",
      "active-wear",
    ],
    lowercase: true,
    required: [true, 'Please specify a category for the product'],
  },
  productDetails: {
    description: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident aliquam, libero recusandae sapiente reprehenderit, atque perspiciatis fuga, voluptate in iste dolor minima id.",
    },
    colors: {
      type: [String],
      enum: ["white", "black", "red", "navy blue", "grey"],
      lowercase: true,
      required: function () {
        return this.category === "active-wear";
      },
    },
    flavours: {
      type: [String],
      enum: ["chocolate", "strawberry", "mango", "unflavoured"],
      lowercase: true,
      required: function () {
        return ["protein", "gainer", "pre-workout", "post-workout"].includes(
          this.category
        );
      }, // Required only for supplements
    },
  },
  sizes: {
    shirtSize: {
      type: [String],
      enum: ["s", "m", "l", "xl", "2xl"],
      lowercase: true,
      required: function () {
        return this.category === "active-wear";
      },
    },
    weight: {
      type: [Number],
      enum: [250, 500, 1000, 2000, 4000],
      required: function () {
        return [
          "protein",
          "gainer",
          "pre-workout",
          "post-workout",
          "vitamin",
        ].includes(this.category);
      }, // Only for supplements
    },
  },
  images: [
    {
      url: String,
      fileName: String,
    },
  ],
  rating: {
    type: Number,
    min: [0, 'Rating cannot be negative'],
    max: [5, 'Rating should be between 0 and 5'],
    default: 0,
  },
  stock: {
    inStock: {
      type: Boolean,
      default: true,
    },
    quantity: {
      type: Number,
      min: [0, 'quantity cannot be negative'],
      required: true,
    },
  },
  price: {
    productPrice: {
      type: Number,
      required: true,
      min: [0, 'price cannot be negative'],
    },
    onSale: {
      type: Boolean,
      default: false,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const vitalProduct = mongoose.model("Product", productSchema);

module.exports = vitalProduct;
