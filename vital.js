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

// seedProducts = [
//   {
//     productName: "Whey Gold Standard",
//     brandName: "Optimum Nutrition",
//     category: "protein",
//     productDetails: {
//       description: "High-quality whey protein for muscle recovery.",
//       flavours: ["chocolate", "strawberry"],
//     },
//     sizes: {
//       weight: [500, 1000],
//     },
//     images: [
//       { url: "/products/protein.jpg", fileName: "whey_protein_1" },
//       { url: "/products/protein.jpg", fileName: "whey_protein_2" },
//     ],
//     rating: 4.5,
//     stock: { inStock: true, quantity: 50 },
//     price: { productPrice: 39.99, onSale: false },
//   },
//   {
//     productName: "Mass Gainer Pro",
//     brandName: "MuscleTech",
//     category: "gainer",
//     productDetails: {
//       description: "High-calorie formula for muscle mass.",
//       flavours: ["mango", "chocolate"],
//     },
//     sizes: {
//       weight: [1000, 2000],
//     },
//     images: [
//       { url: "/products/gainer.webp", fileName: "mass_gainer_1" },
//       { url: "/products/gainer.webp", fileName: "mass_gainer_2" },
//     ],
//     rating: 4.2,
//     stock: { inStock: true, quantity: 30 },
//     price: { productPrice: 49.99, onSale: true },
//   },
//   {
//     productName: "Pre-Workout Xtreme",
//     brandName: "Cellucor",
//     category: "pre-workout",
//     productDetails: {
//       description: "Boosts energy and focus before workouts.",
//       flavours: ["strawberry", "unflavoured"],
//     },
//     sizes: {
//       weight: [250, 500],
//     },
//     images: [
//       { url: "/products/creatine.webp", fileName: "pre_workout_1" },
//       { url: "/products/creatine.webp", fileName: "pre_workout_2" },
//     ],
//     rating: 4.7,
//     stock: { inStock: true, quantity: 20 },
//     price: { productPrice: 29.99, onSale: false },
//   },
//   {
//     productName: "Vitamin D3 Supplement",
//     brandName: "Nature’s Bounty",
//     category: "vitamin",
//     productDetails: {
//       description: "Supports bone and immune health.",
//     },
//     sizes: {
//       weight: [500],
//     },
//     images: [
//       { url: "/products/vitamin.webp", fileName: "vitamin_d3_1" },
//       { url: "/products/vitamin.webp", fileName: "vitamin_d3_2" },
//     ],
//     rating: 4.8,
//     stock: { inStock: false, quantity: 0 },
//     price: { productPrice: 19.99, onSale: false },
//   },
//   {
//     productName: "Men’s Compression T-Shirt",
//     brandName: "Nike",
//     category: "active-wear",
//     productDetails: {
//       description: "Moisture-wicking fabric for high performance.",
//       colors: ["black", "red"],
//     },
//     sizes: {
//       shirtSize: ["m", "l", "xl"],
//     },
//     images: [
//       { url: "/products/compression.webp", fileName: "compression_shirt_1" },
//       { url: "/products/compression.webp", fileName: "compression_shirt_2" },
//     ],
//     rating: 4.6,
//     stock: { inStock: true, quantity: 100 },
//     price: { productPrice: 24.99, onSale: true },
//   },
//   {
//     productName: "ON Supex Supplement",
//     brandName: "Optimum Nutrition",
//     category: "post-workout",
//     productDetails: {
//       description: "Advanced post-workout supplement for muscle recovery.",
//       flavours: ["chocolate", "mango"],
//     },
//     sizes: {
//       weight: [1000, 2000],
//     },
//     images: [
//       {
//         url: "/products/on-supex-supplement.png",
//         fileName: "supex_supplement_1",
//       },
//       {
//         url: "/products/on-supex-supplement.png",
//         fileName: "supex_supplement_2",
//       },
//     ],
//     rating: 4.3,
//     stock: { inStock: true, quantity: 25 },
//     price: { productPrice: 34.99, onSale: false },
//   },
// ];

proteinProducts = [
  {
    productName: "Pro Vegan Protein",
    brandName: "PlantFusion",
    category: "protein",
    productDetails: {
      description:
        "PlantFusion Pro Vegan Protein is a premium plant-based protein supplement crafted for fitness enthusiasts and those seeking a vegan-friendly option. Made from a blend of pea protein isolate and brown rice protein, it delivers complete protein for muscle recovery and growth.\n\nKey Nutritional Highlights (Per Serving - 36g Scoop):\nProtein: 22g of high-quality plant-based protein for muscle repair and endurance.\n\nCarbohydrates: 4g, keeping it low-carb and suitable for lean diets.\n\nTotal Fat: 2.5g, with healthy fats from natural plant sources.\n\nAmino Acid Profile: 10g Essential Amino Acids (EAAs) and 4.8g Branched-Chain Amino Acids (BCAAs) to support muscle synthesis.\n\nCholesterol: 0mg and Sodium: 140mg per scoop.\n\nEnhanced Absorption: Includes digestive enzymes to improve nutrient uptake and reduce bloating.\n\nWhy Choose Pro Vegan Protein?\n- Plant-Based Power: A vegan blend of pea and rice protein for sustainable muscle support.\n- Smooth Digestion: Perfect for post-workout recovery without dairy-related discomfort.\n- Clean Nutrition: Ideal for health-conscious individuals and vegan athletes.",
      flavours: ["mango", "chocolate", "unflavoured"],
    },
    sizes: { shirtSize: [], weight: [1000, 2000, 4000] },
    rating: 0,
    stock: { inStock: true, quantity: 12 },
    price: { onSale: false, productPrice: 1999 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Pure Whey Isolate",
    brandName: "MuscleTech",
    category: "protein",
    productDetails: {
      description:
        "MuscleTech Pure Whey Isolate is a top-tier whey protein supplement designed for athletes aiming for maximum muscle recovery and lean gains. Featuring 100% whey protein isolate, it offers a fast-absorbing, high-purity protein source.\n\nKey Nutritional Highlights (Per Serving - 36g Scoop):\nProtein: 27g of ultra-pure whey protein isolate for rapid muscle repair.\n\nCarbohydrates: 2g, perfect for low-carb and ketogenic diets.\n\nTotal Fat: 0.5g, delivering a lean and clean nutritional profile.\n\nAmino Acid Profile: 12.5g Essential Amino Acids (EAAs) and 6g Branched-Chain Amino Acids (BCAAs) to boost recovery.\n\nCholesterol: 45mg and Sodium: 120mg per scoop.\n\nEnhanced Absorption: Added enzymes for faster digestion and minimal bloating.\n\nWhy Choose Pure Whey Isolate?\n- High Potency Isolate: Pure whey isolate for quick muscle nourishment.\n- Post-Workout Perfection: Fast absorption supports intense training recovery.\n- Lean Muscle Focus: Ideal for fitness enthusiasts and bodybuilders.\n\nNot suitable for vegans; this is a premium dairy-based whey protein.",
      flavours: ["strawberry", "chocolate", "unflavoured"],
    },
    sizes: { shirtSize: [], weight: [1000, 2000, 4000] },
    rating: 0,
    stock: { inStock: true, quantity: 15 },
    price: { onSale: true, productPrice: 2299 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Vegan Power Blend",
    brandName: "Sunwarrior",
    category: "protein",
    productDetails: {
      description:
        "Sunwarrior Vegan Power Blend is a robust plant-based protein supplement tailored for active individuals and vegans. Combining pea, hemp, and goji berry proteins, it provides a balanced amino acid profile for muscle repair and stamina.\n\nKey Nutritional Highlights (Per Serving - 36g Scoop):\nProtein: 20g of plant-derived protein for sustainable muscle support.\n\nCarbohydrates: 5g, with fiber to aid digestion and fullness.\n\nTotal Fat: 3g, featuring healthy fats from hemp seeds.\n\nAmino Acid Profile: 9.5g Essential Amino Acids (EAAs) and 4.5g Branched-Chain Amino Acids (BCAAs) for recovery.\n\nCholesterol: 0mg and Sodium: 150mg per scoop.\n\nEnhanced Absorption: Natural enzymes enhance digestion and nutrient absorption.\n\nWhy Choose Vegan Power Blend?\n- Multi-Source Vegan Protein: A diverse plant blend for complete nutrition.\n- Ideal for Recovery: Supports muscle repair without dairy or animal products.\n- Eco-Friendly Fitness: Perfect for vegan athletes and sustainable lifestyles.",
      flavours: ["mango", "strawberry", "chocolate"],
    },
    sizes: { shirtSize: [], weight: [1000, 2000, 4000] },
    rating: 0,
    stock: { inStock: true, quantity: 9 },
    price: { onSale: false, productPrice: 2099 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Whey Pro Plus",
    brandName: "BSN",
    category: "protein",
    productDetails: {
      description:
        "BSN Whey Pro Plus is a high-performance whey protein supplement designed for athletes and fitness buffs. With a blend of whey protein concentrate and isolate, it supports muscle growth and rapid recovery after intense workouts.\n\nKey Nutritional Highlights (Per Serving - 36g Scoop):\nProtein: 25g of premium whey protein for muscle repair and strength.\n\nCarbohydrates: 3g, keeping it lean and low-carb.\n\nTotal Fat: 1.8g, with minimal saturated fat for clean nutrition.\n\nAmino Acid Profile: 11.5g Essential Amino Acids (EAAs) and 5.7g Branched-Chain Amino Acids (BCAAs) for endurance.\n\nCholesterol: 60mg and Sodium: 125mg per scoop.\n\nEnhanced Absorption: Digestive enzymes reduce bloating and improve uptake.\n\nWhy Choose Whey Pro Plus?\n- Balanced Whey Blend: Combines concentrate and isolate for sustained release.\n- Post-Workout Recovery: Fast digestion aids muscle repair.\n- Fitness Focused: Supports high-intensity training and lean gains.\n\nNot a vegan protein; this is a dairy-based whey blend for serious athletes.",
      flavours: ["chocolate", "unflavoured", "strawberry"],
    },
    sizes: { shirtSize: [], weight: [1000, 2000, 4000] },
    rating: 0,
    stock: { inStock: true, quantity: 7 },
    price: { onSale: false, productPrice: 2399 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Core Whey Protein",
    brandName: "Cellucor",
    category: "protein",
    productDetails: {
      description:
        "Cellucor Core Whey Protein is a reliable whey protein supplement crafted for fitness enthusiasts and athletes. Featuring a blend of whey protein concentrate and isolate, it promotes muscle recovery and lean muscle development.\n\nKey Nutritional Highlights (Per Serving - 36g Scoop):\nProtein: 24g of high-quality whey protein for muscle repair.\n\nCarbohydrates: 3.5g, suitable for low-carb fitness goals.\n\nTotal Fat: 2g, maintaining a lean nutritional profile.\n\nAmino Acid Profile: 11g Essential Amino Acids (EAAs) and 5.5g Branched-Chain Amino Acids (BCAAs) for recovery.\n\nCholesterol: 55mg and Sodium: 130mg per scoop.\n\nEnhanced Absorption: Includes enzymes for better digestion and comfort.\n\nWhy Choose Core Whey Protein?\n- Whey Blend Benefits: Combines concentrate and isolate for optimal results.\n- Quick Recovery: Fast-absorbing protein for post-workout needs.\n- Muscle Support: Perfect for strength training and fitness goals.\n\nNot vegan; this is a dairy-based whey protein blend.",
      flavours: ["mango", "chocolate", "unflavoured"],
    },
    sizes: { shirtSize: [], weight: [1000, 2000, 4000] },
    rating: 0,
    stock: { inStock: true, quantity: 11 },
    price: { onSale: true, productPrice: 2199 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Pea Protein Elite",
    brandName: "Nuzest",
    category: "protein",
    productDetails: {
      description:
        "Nuzest Pea Protein Elite is a clean, plant-based protein supplement designed for vegans and fitness lovers. Sourced from European golden peas, it offers a hypoallergenic protein option for muscle repair and growth.\n\nKey Nutritional Highlights (Per Serving - 36g Scoop):\nProtein: 21g of pure pea protein for muscle recovery and strength.\n\nCarbohydrates: 3g, low-carb and ideal for lean nutrition.\n\nTotal Fat: 2g, with minimal fats for a clean profile.\n\nAmino Acid Profile: 9.8g Essential Amino Acids (EAAs) and 4.7g Branched-Chain Amino Acids (BCAAs) for endurance.\n\nCholesterol: 0mg and Sodium: 145mg per scoop.\n\nEnhanced Absorption: Naturally digestible with no added enzymes needed.\n\nWhy Choose Pea Protein Elite?\n- Vegan-Friendly: Pure pea protein for sustainable muscle support.\n- Allergy-Safe: Hypoallergenic and free from dairy, soy, or gluten.\n- Fitness Ready: Supports recovery and lean gains for active lifestyles.",
      flavours: ["strawberry", "chocolate", "unflavoured"],
    },
    sizes: { shirtSize: [], weight: [1000, 2000, 4000] },
    rating: 0,
    stock: { inStock: true, quantity: 14 },
    price: { onSale: false, productPrice: 1899 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Whey Extreme",
    brandName: "MyProtein",
    category: "protein",
    productDetails: {
      description:
        "MyProtein Whey Extreme is a powerful whey protein supplement built for athletes and fitness enthusiasts. Combining whey protein concentrate and isolate, it delivers a potent protein source for muscle repair and growth.\n\nKey Nutritional Highlights (Per Serving - 36g Scoop):\nProtein: 26g of high-quality whey protein for muscle synthesis.\n\nCarbohydrates: 2.5g, ideal for low-carb fitness plans.\n\nTotal Fat: 1.7g, keeping it lean and clean.\n\nAmino Acid Profile: 12g Essential Amino Acids (EAAs) and 5.9g Branched-Chain Amino Acids (BCAAs) for recovery.\n\nCholesterol: 50mg and Sodium: 135mg per scoop.\n\nEnhanced Absorption: Digestive enzymes ensure smooth digestion.\n\nWhy Choose Whey Extreme?\n- Potent Whey Blend: Concentrate and isolate for sustained protein delivery.\n- Rapid Recovery: Fast-digesting protein for post-workout needs.\n- Muscle Building: Supports intense training and lean muscle gains.\n\nNot vegan; this is a dairy-based whey protein blend.",
      flavours: ["mango", "strawberry", "chocolate"],
    },
    sizes: { shirtSize: [], weight: [1000, 2000, 4000] },
    rating: 0,
    stock: { inStock: true, quantity: 6 },
    price: { onSale: true, productPrice: 2099 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Impact Whey",
    brandName: "Ghost",
    category: "protein",
    productDetails: {
      description:
        "Ghost Impact Whey is a premium whey protein supplement designed for fitness enthusiasts and athletes. Featuring a mix of whey protein isolate and concentrate, it provides a versatile protein source for muscle recovery and development.\n\nKey Nutritional Highlights (Per Serving - 36g Scoop):\nProtein: 25g of high-quality whey protein for muscle repair.\n\nCarbohydrates: 3g, suitable for lean and low-carb diets.\n\nTotal Fat: 1.5g, maintaining a clean nutritional profile.\n\nAmino Acid Profile: 11.5g Essential Amino Acids (EAAs) and 5.6g Branched-Chain Amino Acids (BCAAs) for endurance.\n\nCholesterol: 55mg and Sodium: 140mg per scoop.\n\nEnhanced Absorption: Includes digestive enzymes for better uptake.\n\nWhy Choose Impact Whey?\n- Versatile Whey Blend: Isolate and concentrate for balanced protein release.\n- Post-Workout Support: Quick digestion aids muscle recovery.\n- Fitness Essential: Perfect for active individuals and strength training.\n\nNot a vegan protein; this is a dairy-based whey blend.",
      flavours: ["chocolate", "unflavoured", "mango"],
    },
    sizes: { shirtSize: [], weight: [1000, 2000, 4000] },
    rating: 0,
    stock: { inStock: true, quantity: 13 },
    price: { onSale: false, productPrice: 2299 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
];

sampleProducts = [
  {
    productName: "Ignite Pre-Workout",
    brandName: "C4",
    category: "pre-workout",
    productDetails: {
      description:
        "C4 Ignite Pre-Workout is a high-energy supplement designed to boost focus, endurance, and performance during intense training sessions. Packed with caffeine, beta-alanine, and nitric oxide boosters, it’s perfect for athletes pushing their limits.\n\nKey Nutritional Highlights (Per Serving - 10g Scoop):\nCaffeine: 200mg for heightened energy and mental alertness.\n\nBeta-Alanine: 1.6g to enhance muscular endurance and delay fatigue.\n\nCarbohydrates: 0g, keeping it carb-free for lean performance.\n\nTotal Fat: 0g, ensuring a clean energy profile.\n\nNitrates: 150mg to support blood flow and muscle pumps.\n\nSodium: 50mg and Potassium: 100mg per scoop.\n\nWhy Choose Ignite Pre-Workout?\n- Explosive Energy: Caffeine and beta-alanine for peak performance.\n- Enhanced Focus: Supports mental clarity during tough workouts.\n- Muscle Pump: Nitric oxide boosters for better circulation and power.\n\nNot a meal replacement; this is a pre-workout energy enhancer.",
      flavours: ["mango", "strawberry", "unflavoured"],
    },
    sizes: { shirtSize: [], weight: [250, 500, 1000] },
    rating: 0,
    stock: { inStock: true, quantity: 10 },
    price: { onSale: false, productPrice: 1499 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Pulse Pre-Workout",
    brandName: "Legion",
    category: "pre-workout",
    productDetails: {
      description:
        "Legion Pulse Pre-Workout is a science-backed supplement formulated to maximize energy, strength, and endurance. With clinically dosed ingredients like citrulline malate and caffeine, it’s ideal for serious athletes.\n\nKey Nutritional Highlights (Per Serving - 15g Scoop):\nCaffeine: 350mg for intense energy and focus.\n\nCitrulline Malate: 8g to boost nitric oxide and improve blood flow.\n\nCarbohydrates: 1g, minimal carbs for a lean formula.\n\nTotal Fat: 0g, keeping it clean and focused.\n\nBeta-Alanine: 2g to reduce fatigue and enhance performance.\n\nSodium: 60mg and Potassium: 120mg per scoop.\n\nWhy Choose Pulse Pre-Workout?\n- High Potency: Clinically effective doses for real results.\n- Sustained Energy: Perfect for long, grueling workouts.\n- Muscle Endurance: Supports strength and stamina under pressure.",
      flavours: ["chocolate", "mango", "unflavoured"],
    },
    sizes: { shirtSize: [], weight: [250, 500, 1000] },
    rating: 0,
    stock: { inStock: true, quantity: 8 },
    price: { onSale: true, productPrice: 1799 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Nitro Surge",
    brandName: "Jacked Factory",
    category: "pre-workout",
    productDetails: {
      description:
        "Jacked Factory Nitro Surge is a potent pre-workout supplement designed to elevate energy, focus, and pump during training. Featuring a blend of caffeine, L-theanine, and nitric oxide enhancers, it’s built for peak performance.\n\nKey Nutritional Highlights (Per Serving - 12g Scoop):\nCaffeine: 180mg for balanced energy without jitters.\n\nL-Citrulline: 6g to enhance blood flow and muscle pumps.\n\nCarbohydrates: 0g, ideal for low-carb diets.\n\nTotal Fat: 0g, delivering a clean energy boost.\n\nBeta-Alanine: 1.8g to improve endurance and delay fatigue.\n\nSodium: 55mg and Potassium: 110mg per scoop.\n\nWhy Choose Nitro Surge?\n- Smooth Energy: Caffeine and L-theanine for focused power.\n- Pump Amplifier: Boosts nitric oxide for vascularity.\n- Performance Edge: Perfect for athletes and fitness enthusiasts.",
      flavours: ["strawberry", "chocolate", "unflavoured"],
    },
    sizes: { shirtSize: [], weight: [250, 500, 1000] },
    rating: 0,
    stock: { inStock: true, quantity: 12 },
    price: { onSale: false, productPrice: 1599 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Recover Post-Workout",
    brandName: "PEScience",
    category: "post-workout",
    productDetails: {
      description:
        "PEScience Recover Post-Workout is a premium recovery supplement designed to replenish muscles after intense exercise. With a mix of fast-digesting carbs, electrolytes, and amino acids, it accelerates recovery and reduces soreness.\n\nKey Nutritional Highlights (Per Serving - 40g Scoop):\nCarbohydrates: 30g of fast-acting carbs to restore glycogen levels.\n\nProtein: 5g of amino acids for muscle repair.\n\nTotal Fat: 0g, keeping it lean and focused on recovery.\n\nAmino Acid Profile: 8g Essential Amino Acids (EAAs) and 4g Branched-Chain Amino Acids (BCAAs) for muscle synthesis.\n\nSodium: 200mg and Potassium: 150mg per scoop for hydration.\n\nWhy Choose Recover Post-Workout?\n- Rapid Replenishment: Carbs and electrolytes for quick recovery.\n- Muscle Repair: Amino acids support post-exercise rebuilding.\n- Hydration Boost: Restores electrolyte balance after sweat loss.",
      flavours: ["mango", "strawberry", "unflavoured"],
    },
    sizes: { shirtSize: [], weight: [250, 500] },
    rating: 0,
    stock: { inStock: true, quantity: 9 },
    price: { onSale: false, productPrice: 1899 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Recharge Post-Workout",
    brandName: "BSN",
    category: "post-workout",
    productDetails: {
      description:
        "BSN Recharge Post-Workout is a powerful recovery formula crafted to support muscle repair and glycogen restoration after training. Combining carbs, creatine, and BCAAs, it’s ideal for athletes seeking optimal recovery.\n\nKey Nutritional Highlights (Per Serving - 45g Scoop):\nCarbohydrates: 35g of fast-digesting carbs for glycogen replenishment.\n\nCreatine: 3g to enhance strength and recovery.\n\nTotal Fat: 0g, maintaining a lean recovery profile.\n\nAmino Acid Profile: 7g Essential Amino Acids (EAAs) and 5g Branched-Chain Amino Acids (BCAAs) for muscle repair.\n\nSodium: 180mg and Potassium: 140mg per scoop.\n\nWhy Choose Recharge Post-Workout?\n- Full Recovery: Carbs and creatine for energy and strength restoration.\n- Muscle Support: BCAAs reduce soreness and promote growth.\n- Post-Training Essential: Perfect for high-intensity athletes.",
      flavours: ["chocolate", "mango", "unflavoured"],
    },
    sizes: { shirtSize: [], weight: [250, 500] },
    rating: 0,
    stock: { inStock: true, quantity: 11 },
    price: { onSale: true, productPrice: 1999 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Restore Post-Workout",
    brandName: "MyProtein",
    category: "post-workout",
    productDetails: {
      description:
        "MyProtein Restore Post-Workout is a comprehensive recovery supplement designed to aid muscle repair and rehydration after exercise. With a blend of carbs, electrolytes, and amino acids, it’s perfect for fitness enthusiasts.\n\nKey Nutritional Highlights (Per Serving - 40g Scoop):\nCarbohydrates: 28g of quick-absorbing carbs for glycogen recovery.\n\nProtein: 4g of amino acids to kickstart muscle repair.\n\nTotal Fat: 0g, keeping it clean and recovery-focused.\n\nAmino Acid Profile: 6g Essential Amino Acids (EAAs) and 3.5g Branched-Chain Amino Acids (BCAAs) for recovery.\n\nSodium: 190mg and Potassium: 130mg per scoop.\n\nWhy Choose Restore Post-Workout?\n- Glycogen Boost: Fast carbs replenish energy stores.\n- Muscle Recovery: Amino acids reduce post-workout fatigue.\n- Electrolyte Balance: Supports hydration after intense sessions.",
      flavours: ["strawberry", "chocolate", "unflavoured"],
    },
    sizes: { shirtSize: [], weight: [250, 500] },
    rating: 0,
    stock: { inStock: true, quantity: 7 },
    price: { onSale: false, productPrice: 1799 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Mass Gainer Pro",
    brandName: "Optimum Nutrition",
    category: "gainer",
    productDetails: {
      description:
        "Optimum Nutrition Mass Gainer Pro is a high-calorie supplement designed for those looking to pack on size and strength. With a blend of protein, carbs, and healthy fats, it’s perfect for hard gainers and athletes bulking up.\n\nKey Nutritional Highlights (Per Serving - 150g Scoop):\nProtein: 50g of whey protein for muscle growth.\n\nCarbohydrates: 85g of complex carbs for sustained energy and mass.\n\nTotal Fat: 8g, including MCTs for additional calories.\n\nCalories: 650 kcal per serving to support weight gain.\n\nAmino Acid Profile: 12g Essential Amino Acids (EAAs) and 6g Branched-Chain Amino Acids (BCAAs).\n\nSodium: 300mg and Potassium: 200mg per scoop.\n\nWhy Choose Mass Gainer Pro?\n- High-Calorie Formula: Ideal for bulking and mass building.\n- Muscle Fuel: Protein and carbs for growth and recovery.\n- Sustained Energy: Perfect for hard gainers and intense training.",
      flavours: ["chocolate", "mango", "unflavoured"],
    },
    sizes: { shirtSize: [], weight: [2000, 4000] },
    rating: 0,
    stock: { inStock: true, quantity: 10 },
    price: { onSale: false, productPrice: 2999 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Bulk Mass Gainer",
    brandName: "Dymatize",
    category: "gainer",
    productDetails: {
      description:
        "Dymatize Bulk Mass Gainer is a robust weight-gain supplement crafted for individuals aiming to increase muscle mass and size. Featuring a mix of whey protein, carbs, and fats, it’s ideal for bulking phases.\n\nKey Nutritional Highlights (Per Serving - 140g Scoop):\nProtein: 40g of whey protein for muscle development.\n\nCarbohydrates: 80g of blended carbs for energy and mass.\n\nTotal Fat: 7g, with healthy fats to boost calorie intake.\n\nCalories: 600 kcal per serving for serious weight gain.\n\nAmino Acid Profile: 10g Essential Amino Acids (EAAs) and 5g Branched-Chain Amino Acids (BCAAs).\n\nSodium: 280mg and Potassium: 180mg per scoop.\n\nWhy Choose Bulk Mass Gainer?\n- Mass Building: High calories and protein for size gains.\n- Energy Support: Carbs fuel intense workouts and recovery.\n- Bulking Essential: Perfect for athletes and hard gainers.",
      flavours: ["strawberry", "chocolate", "unflavoured"],
    },
    sizes: { shirtSize: [], weight: [2000, 4000] },
    rating: 0,
    stock: { inStock: true, quantity: 8 },
    price: { onSale: true, productPrice: 2799 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Mega Mass Gainer",
    brandName: "MuscleTech",
    category: "gainer",
    productDetails: {
      description:
        "MuscleTech Mega Mass Gainer is a high-performance mass-building supplement designed for those serious about gaining size. With a potent mix of protein, carbs, and creatine, it supports muscle growth and strength.\n\nKey Nutritional Highlights (Per Serving - 160g Scoop):\nProtein: 55g of whey protein for muscle repair and growth.\n\nCarbohydrates: 90g of complex carbs for energy and mass.\n\nTotal Fat: 9g, including healthy fats for extra calories.\n\nCalories: 700 kcal per serving to fuel weight gain.\n\nAmino Acid Profile: 13g Essential Amino Acids (EAAs) and 6.5g Branched-Chain Amino Acids (BCAAs).\n\nSodium: 320mg and Potassium: 210mg per scoop.\n\nWhy Choose Mega Mass Gainer?\n- Ultimate Mass Formula: High protein and calories for bulking.\n- Strength Boost: Creatine enhances power and recovery.\n- Size Support: Ideal for hard gainers and bodybuilders.",
      flavours: ["mango", "chocolate", "unflavoured"],
    },
    sizes: { shirtSize: [], weight: [2000, 4000] },
    rating: 0,
    stock: { inStock: true, quantity: 12 },
    price: { onSale: false, productPrice: 3199 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Mega Mass Gainer",
    brandName: "MuscleTech",
    category: "gainer",
    productDetails: {
      description:
        "MuscleTech Mega Mass Gainer is a high-performance mass-building supplement designed for those serious about gaining size. With a potent mix of protein, carbs, and creatine, it supports muscle growth and strength.\n\nKey Nutritional Highlights (Per Serving - 160g Scoop):\nProtein: 55g of whey protein for muscle repair and growth.\n\nCarbohydrates: 90g of complex carbs for energy and mass.\n\nTotal Fat: 9g, including healthy fats for extra calories.\n\nCalories: 700 kcal per serving to fuel weight gain.\n\nAmino Acid Profile: 13g Essential Amino Acids (EAAs) and 6.5g Branched-Chain Amino Acids (BCAAs).\n\nSodium: 320mg and Potassium: 210mg per scoop.\n\nWhy Choose Mega Mass Gainer?\n- Ultimate Mass Formula: High protein and calories for bulking.\n- Strength Boost: Creatine enhances power and recovery.\n- Size Support: Ideal for hard gainers and bodybuilders.",
      flavours: ["mango", "chocolate", "unflavoured"],
    },
    sizes: { shirtSize: [], weight: [2000, 4000] },
    rating: 0,
    stock: { inStock: true, quantity: 12 },
    price: { onSale: false, productPrice: 3199 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Multi-Vitamin Elite",
    brandName: "NOW Foods",
    category: "vitamin",
    productDetails: {
      description:
        "NOW Foods Multi-Vitamin Elite is a comprehensive daily supplement designed to support overall health and wellness. Packed with essential vitamins and minerals, it’s perfect for active individuals and those filling nutritional gaps.\n\nKey Nutritional Highlights (Per Serving - 2 Tablets):\nVitamin A: 5000 IU for vision and immune support.\n\nVitamin C: 250mg to boost immunity and fight oxidative stress.\n\nVitamin D: 1000 IU for bone health and mood regulation.\n\nB-Vitamins: Full spectrum (B1, B6, B12) for energy and metabolism.\n\nMagnesium: 100mg and Zinc: 15mg for muscle and immune function.\n\nCalories: 0 kcal, no added macros.\n\nWhy Choose Multi-Vitamin Elite?\n- Broad Spectrum: Covers essential vitamins and minerals.\n- Daily Support: Enhances energy, immunity, and recovery.\n- Wellness Essential: Ideal for fitness enthusiasts and busy lifestyles.",
      flavours: ["unflavoured"],
    },
    sizes: { shirtSize: [], weight: [250, 500] },
    rating: 0,
    stock: { inStock: true, quantity: 15 },
    price: { onSale: false, productPrice: 999 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Vitamin C Plus",
    brandName: "Nature’s Way",
    category: "vitamin",
    productDetails: {
      description:
        "Nature’s Way Vitamin C Plus is a potent antioxidant supplement designed to strengthen immunity and support recovery. With added bioflavonoids, it’s ideal for active individuals and those seeking daily wellness.\n\nKey Nutritional Highlights (Per Serving - 1 Tablet):\nVitamin C: 1000mg for immune defense and collagen production.\n\nBioflavonoids: 100mg to enhance Vitamin C absorption.\n\nCarbohydrates: 0g, no added macros.\n\nTotal Fat: 0g, clean and simple formula.\n\nCalcium: 50mg for bone and muscle support.\n\nCalories: 0 kcal per serving.\n\nWhy Choose Vitamin C Plus?\n- Immune Boost: High-dose Vitamin C for daily protection.\n- Enhanced Absorption: Bioflavonoids improve effectiveness.\n- Recovery Aid: Supports active lifestyles and stress relief.",
      flavours: ["unflavoured"],
    },
    sizes: { shirtSize: [], weight: [250, 500] },
    rating: 0,
    stock: { inStock: true, quantity: 13 },
    price: { onSale: true, productPrice: 799 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "D3 Energy",
    brandName: "Garden of Life",
    category: "vitamin",
    productDetails: {
      description:
        "Garden of Life D3 Energy is a high-potency Vitamin D supplement designed to support bone health, mood, and immunity. Sourced from natural ingredients, it’s perfect for those with active lifestyles or limited sun exposure.\n\nKey Nutritional Highlights (Per Serving - 1 Softgel):\nVitamin D3: 5000 IU for optimal bone and immune support.\n\nOmega-3s: 50mg from fish oil for heart and brain health.\n\nCarbohydrates: 0g, no added macros.\n\nTotal Fat: 0.5g, from healthy fish oil.\n\nCalories: 5 kcal per serving.\n\nNo Sodium or Potassium added.\n\nWhy Choose D3 Energy?\n- High Potency: 5000 IU of D3 for maximum benefits.\n- Mood & Bone Support: Enhances wellness and strength.\n- Natural Source: Ideal for fitness and health-conscious individuals.",
      flavours: ["unflavoured"],
    },
    sizes: { shirtSize: [], weight: [250, 500] },
    rating: 0,
    stock: { inStock: true, quantity: 14 },
    price: { onSale: false, productPrice: 899 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
];

activeWearProducts = [
  {
    productName: "Performance Tee",
    brandName: "Under Armour",
    category: "active-wear",
    productDetails: {
      description:
        "Under Armour Performance Tee is a lightweight, breathable t-shirt designed for athletes and fitness enthusiasts. Made with moisture-wicking fabric and a stretchable design, it ensures comfort and mobility during intense workouts.\n\nKey Features:\nMaterial: 100% polyester with UA Tech™ fabric for a soft, natural feel.\n\nMoisture-Wicking: Keeps you dry by pulling sweat away from the skin.\n\nFit: Loose fit for unrestricted movement and ventilation.\n\nStretch: 4-way stretch construction for flexibility in all directions.\n\nOdor Control: Anti-odor technology prevents microbial growth.\n\nDurability: Reinforced stitching for long-lasting wear.\n\nWhy Choose Performance Tee?\n- Breathable Comfort: Ideal for running, lifting, or high-intensity training.\n- Sweat Management: Stay cool and dry during tough sessions.\n- Versatile Design: Perfect for gym, outdoor sports, or casual wear.",
    },
    sizes: { shirtSize: ["s", "m", "l", "xl", "2xl"], weight: [] },
    colors: ["black", "white", "grey"],
    rating: 0,
    stock: { inStock: true, quantity: 20 },
    price: { onSale: false, productPrice: 1499 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Elite Compression Shorts",
    brandName: "Nike",
    category: "active-wear",
    productDetails: {
      description:
        "Nike Elite Compression Shorts are engineered for performance and support during high-impact activities. Featuring Dri-FIT technology and a snug fit, they provide muscle stability and comfort for intense training.\n\nKey Features:\nMaterial: 90% polyester, 10% spandex for a supportive, stretchy fit.\n\nCompression: Targeted support for key muscle groups.\n\nMoisture-Wicking: Dri-FIT fabric keeps sweat at bay.\n\nFit: Tight fit to enhance circulation and reduce fatigue.\n\nWaistband: Elastic waist with flat seams for irritation-free wear.\n\nDurability: Double-stitched hems for rugged use.\n\nWhy Choose Elite Compression Shorts?\n- Muscle Support: Compression aids recovery and performance.\n- Dry Comfort: Perfect for long workouts or sports.\n- Athletic Design: Ideal for lifting, running, or team sports.",
    },
    sizes: { shirtSize: ["s", "m", "l", "xl", "2xl"], weight: [] },
    colors: ["navy blue", "black", "red"],
    rating: 0,
    stock: { inStock: true, quantity: 15 },
    price: { onSale: true, productPrice: 1999 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Flex Tank Top",
    brandName: "Adidas",
    category: "active-wear",
    productDetails: {
      description:
        "Adidas Flex Tank Top is a sleeveless active-wear piece designed for maximum mobility and ventilation. Crafted with Climalite fabric, it’s perfect for warm-weather workouts or layering during training.\n\nKey Features:\nMaterial: 95% cotton, 5% elastane for a soft, stretchy feel.\n\nMoisture-Wicking: Climalite technology wicks sweat away.\n\nFit: Regular fit with deep armholes for freedom of movement.\n\nBreathability: Lightweight fabric promotes airflow.\n\nDesign: Reflective logo for visibility in low-light conditions.\n\nDurability: Reinforced neckline for lasting wear.\n\nWhy Choose Flex Tank Top?\n- Cooling Comfort: Ideal for hot days or intense sessions.\n- Full Range of Motion: Perfect for lifting, yoga, or cardio.\n- Stylish Utility: Works for gym or casual outings.",
    },
    sizes: { shirtSize: ["s", "m", "l", "xl", "2xl"], weight: [] },
    colors: ["white", "grey", "red"],
    rating: 0,
    stock: { inStock: true, quantity: 18 },
    price: { onSale: false, productPrice: 1299 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
  {
    productName: "Pro Training Jacket",
    brandName: "Puma",
    category: "active-wear",
    productDetails: {
      description:
        "Puma Pro Training Jacket is a versatile outer layer designed for warm-ups, cool-downs, or outdoor workouts. With wind-resistant fabric and ergonomic design, it offers protection and comfort for active lifestyles.\n\nKey Features:\nMaterial: 100% polyester with dryCELL technology for moisture control.\n\nWind Resistance: Shields against light wind and chill.\n\nFit: Relaxed fit with articulated sleeves for natural movement.\n\nPockets: Zippered side pockets for secure storage.\n\nVentilation: Mesh-lined hood for breathability.\n\nDurability: High-quality zippers and stitching for long-term use.\n\nWhy Choose Pro Training Jacket?\n- Weather Ready: Perfect for outdoor runs or training.\n- Functional Design: Pockets and hood add practicality.\n- All-Season Wear: Great for layering or standalone use.",
    },
    sizes: { shirtSize: ["s", "m", "l", "xl", "2xl"], weight: [] },
    colors: ["black", "navy blue", "grey"],
    rating: 0,
    stock: { inStock: true, quantity: 12 },
    price: { onSale: false, productPrice: 2499 },
    images: [
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/dbuo5uchnhxuum72smzw.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/jxbo7mezlosyorhr46dv.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571602/vital-gear/ftgcawid4kat202xcidp.webp",
      },
      {
        url: "https://res.cloudinary.com/dli5madxn/image/upload/v1743571603/vital-gear/sdktrjldjnjxaxioygxx.png",
      },
    ],
  },
];

// vitalProduct
//   .deleteMany({})
//   .then(() => {
//     console.log("Deleted...");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

vitalProduct
  .insertMany(sampleProducts)
  .then(() => {
    console.log("Data added successfully...");
  })
  .catch((err) => {
    console.log("ERROR encountered:");
    console.log(err);
  });
