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
    productName: "Bizoyme Performance Whey",
    brandName: "Muscle Blaze",
    category: "protein",
    productDetails: {
      flavours: ["chocolate", "mango"],
    },
    sizes: {
      weight: [500, 1000],
    },
    stock: {
      quantity: 4,
    },
    price: {
      productPrice: 2500,
      onSale: true,
    },
    images: {
      displayImage: "/products/protein.jpg",
      sliderImages: ["/products/protein.jpg", "/products/gainer.webp"],
    },
  },
  {
    productName: "Mass Gainer Elite",
    brandName: "Optimum Nutrition",
    category: "gainer",
    productDetails: {
      flavours: ["chocolate"],
    },
    sizes: {
      weight: [1000, 2000],
    },
    stock: {
      quantity: 6,
    },
    price: {
      productPrice: 3200,
    },
    images: {
      displayImage: "/products/gainer.webp",
      sliderImages: ["/products/gainer.webp", "/products/protein-isolate.jpg"],
    },
  },
  {
    productName: "Pre-Workout Explosion",
    brandName: "MuscleTech",
    category: "pre-workout",
    productDetails: {
      flavours: ["strawberry"],
    },
    sizes: {
      weight: [500],
    },
    stock: {
      quantity: 10,
    },
    price: {
      productPrice: 1800,
    },
    images: {
      displayImage: "/products/on-supex-supplement.png",
      sliderImages: ["/products/creatine.webp", "/products/protein.jpg"],
    },
  },
  {
    productName: "Post-Workout Explosion",
    brandName: "MuscleMadness",
    category: "post-workout",
    productDetails: {
      flavours: ["strawberry"],
    },
    sizes: {
      weight: [500],
    },
    stock: {
      quantity: 10,
    },
    price: {
      productPrice: 1800,
    },
    images: {
      displayImage: "/products/on-supex-supplement.png",
      sliderImages: ["/products/creatine.webp", "/products/protein.jpg"],
    },
  },
  {
    productName: "Daily Vitamin Boost",
    brandName: "GNC",
    category: "vitamin",
    productDetails: {
      flavours: ["unflavoured"],
    },
    sizes: {
      weight: [250, 500],
    },
    stock: {
      quantity: 8,
    },
    price: {
      productPrice: 2200,
    },
    images: {
      displayImage: "/products/vitamin.webp",
      sliderImages: [
        "/products/vitamin.webp",
        "/products/on-supex-supplement.png",
      ],
    },
  },
  {
    productName: "VitalGear Compression Shirt",
    brandName: "VitalGear",
    category: "active-wear",
    productDetails: {
      colors: ["black", "grey"],
    },
    sizes: {
      shirtSize: ["m", "l", "xl"],
    },
    stock: {
      quantity: 12,
    },
    price: {
      productPrice: 1500,
    },
    images: {
      displayImage: "/products/compression.webp",
      sliderImages: ["/products/compression.webp", "/products/gainer.webp"],
    },
  },
  {
    productName: "Gold Standard Whey",
    brandName: "Optimum Nutrition",
    category: "protein",
    productDetails: {
      flavours: ["chocolate", "strawberry"],
    },
    sizes: {
      weight: [500, 1000, 2000],
    },
    stock: {
      quantity: 5,
    },
    price: {
      productPrice: 3000,
      onSale: true,
    },
    images: {
      displayImage: "/products/protein-isolate.jpg",
      sliderImages: ["/products/protein.jpg", "/products/vitamin.webp"],
    },
  },
  {
    productName: "Isopure Zero Carb",
    brandName: "Nature's Best",
    category: "protein",
    productDetails: {
      flavours: ["unflavoured"],
    },
    sizes: {
      weight: [1000],
    },
    stock: {
      quantity: 7,
    },
    price: {
      productPrice: 3500,
    },
    images: {
      displayImage: "/products/protein.jpg",
      sliderImages: [
        "/products/on-supex-supplement.png",
        "/products/creatine.webp",
      ],
    },
  },
  {
    productName: "Hydro Whey Platinum",
    brandName: "Optimum Nutrition",
    category: "protein",
    productDetails: {
      flavours: ["mango"],
    },
    sizes: {
      weight: [500, 2000],
    },
    stock: {
      quantity: 3,
    },
    price: {
      productPrice: 4000,
      onSale: false,
    },
    images: {
      displayImage: "/products/protein-isolate.jpg",
      sliderImages: ["/products/gainer.webp", "/products/protein.jpg"],
    },
  },
  {
    productName: "Dymatize Elite Whey",
    brandName: "Dymatize",
    category: "protein",
    productDetails: {
      flavours: ["strawberry"],
    },
    sizes: {
      weight: [500, 1000],
    },
    stock: {
      quantity: 9,
    },
    price: {
      productPrice: 2800,
    },
    images: {
      displayImage: "/products/creatine.webp",
      sliderImages: [
        "/products/creatine.webp",
        "/products/protein-isolate.jpg",
      ],
    },
  },
  {
    productName: "NitroTech Whey Gold",
    brandName: "MuscleTech",
    category: "protein",
    productDetails: {
      flavours: ["chocolate", "mango"],
    },
    sizes: {
      weight: [500, 2000, 4000],
    },
    stock: {
      quantity: 6,
    },
    price: {
      productPrice: 4200,
    },
    images: {
      displayImage: "/products/protein.jpg",
      sliderImages: ["/products/protein.jpg", "/products/compression.webp"],
    },
  },
  {
    productName: "Rule 1 R1 Whey Blend",
    brandName: "Rule 1",
    category: "protein",
    productDetails: {
      flavours: ["chocolate"],
    },
    sizes: {
      weight: [500, 1000, 2000],
    },
    stock: {
      quantity: 10,
    },
    price: {
      productPrice: 3400,
    },
    images: {
      displayImage: "/products/protein-isolate.jpg",
      sliderImages: [
        "/products/on-supex-supplement.png",
        "/products/protein.jpg",
      ],
    },
  },
  {
    productName: "Impact Whey Protein",
    brandName: "MyProtein",
    category: "protein",
    productDetails: {
      flavours: ["strawberry", "unflavoured"],
    },
    sizes: {
      weight: [500, 1000, 2000],
    },
    stock: {
      quantity: 8,
    },
    price: {
      productPrice: 2700,
    },
    images: {
      displayImage: "/products/gainer.webp",
      sliderImages: ["/products/gainer.webp", "/products/vitamin.webp"],
    },
  },
  {
    productName: "GNC Pro Performance Whey",
    brandName: "GNC",
    category: "protein",
    productDetails: {
      flavours: ["mango"],
    },
    sizes: {
      weight: [500, 1000],
    },
    stock: {
      quantity: 12,
    },
    price: {
      productPrice: 2600,
    },
    images: {
      displayImage: "/products/compression.webp",
      sliderImages: [
        "/products/compression.webp",
        "/products/on-supex-supplement.png",
      ],
    },
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
