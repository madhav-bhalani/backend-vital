const mongoose = require("mongoose");
const vitalProduct = require("./models/products");

mongoose
  .connect("mongodb://127.0.0.1:27017/vital-gear")
  .then(() => {
    console.log("Connection Open...");
  })
  .catch((err) => {
    console.log("Ohhhh noooo errorrrr");
    console.log(err);
  });

seedProducts = [
  {
    productName: "Whey Gold Standard",
    brandName: "Optimum Nutrition",
    category: "protein",
    productDetails: {
      description: "High-quality whey protein for muscle recovery.",
      flavours: ["chocolate", "strawberry"],
    },
    sizes: {
      weight: [500, 1000],
    },
    images: [
      { url: "/products/protein.jpg", fileName: "whey_protein_1" },
      { url: "/products/protein.jpg", fileName: "whey_protein_2" },
    ],
    rating: 4.5,
    stock: { inStock: true, quantity: 50 },
    price: { productPrice: 39.99, onSale: false },
  },
  {
    productName: "Mass Gainer Pro",
    brandName: "MuscleTech",
    category: "gainer",
    productDetails: {
      description: "High-calorie formula for muscle mass.",
      flavours: ["mango", "chocolate"],
    },
    sizes: {
      weight: [1000, 2000],
    },
    images: [
      { url: "/products/gainer.webp", fileName: "mass_gainer_1" },
      { url: "/products/gainer.webp", fileName: "mass_gainer_2" },
    ],
    rating: 4.2,
    stock: { inStock: true, quantity: 30 },
    price: { productPrice: 49.99, onSale: true },
  },
  {
    productName: "Pre-Workout Xtreme",
    brandName: "Cellucor",
    category: "pre-workout",
    productDetails: {
      description: "Boosts energy and focus before workouts.",
      flavours: ["strawberry", "unflavoured"],
    },
    sizes: {
      weight: [250, 500],
    },
    images: [
      { url: "/products/creatine.webp", fileName: "pre_workout_1" },
      { url: "/products/creatine.webp", fileName: "pre_workout_2" },
    ],
    rating: 4.7,
    stock: { inStock: true, quantity: 20 },
    price: { productPrice: 29.99, onSale: false },
  },
  {
    productName: "Vitamin D3 Supplement",
    brandName: "Nature’s Bounty",
    category: "vitamin",
    productDetails: {
      description: "Supports bone and immune health.",
    },
    sizes: {
      weight: [500],
    },
    images: [
      { url: "/products/vitamin.webp", fileName: "vitamin_d3_1" },
      { url: "/products/vitamin.webp", fileName: "vitamin_d3_2" },
    ],
    rating: 4.8,
    stock: { inStock: false, quantity: 0 },
    price: { productPrice: 19.99, onSale: false },
  },
  {
    productName: "Men’s Compression T-Shirt",
    brandName: "Nike",
    category: "active-wear",
    productDetails: {
      description: "Moisture-wicking fabric for high performance.",
      colors: ["black", "red"],
    },
    sizes: {
      shirtSize: ["m", "l", "xl"],
    },
    images: [
      { url: "/products/compression.webp", fileName: "compression_shirt_1" },
      { url: "/products/compression.webp", fileName: "compression_shirt_2" },
    ],
    rating: 4.6,
    stock: { inStock: true, quantity: 100 },
    price: { productPrice: 24.99, onSale: true },
  },
  {
    productName: "ON Supex Supplement",
    brandName: "Optimum Nutrition",
    category: "post-workout",
    productDetails: {
      description: "Advanced post-workout supplement for muscle recovery.",
      flavours: ["chocolate", "mango"],
    },
    sizes: {
      weight: [1000, 2000],
    },
    images: [
      {
        url: "/products/on-supex-supplement.png",
        fileName: "supex_supplement_1",
      },
      {
        url: "/products/on-supex-supplement.png",
        fileName: "supex_supplement_2",
      },
    ],
    rating: 4.3,
    stock: { inStock: true, quantity: 25 },
    price: { productPrice: 34.99, onSale: false },
  },
];

vitalProduct
  .deleteMany({})
  .then(() => {
    console.log("Deleted...");
  })
  .catch((err) => {
    console.log(err);
  });

vitalProduct
  .insertMany(seedProducts)
  .then(() => {
    console.log("Data added successfully...");
  })
  .catch((err) => {
    console.log("ERROR encountered:");
    console.log(err);
  });
