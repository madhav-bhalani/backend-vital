const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

const shoppingSchema = new Schema({
  userId: {
    type: objectId,
    ref: "User",
    required: true,
    unique: true
  },
  cartItems: [
    {
      itemQuantity: {
        type: Number,
      },
      productId: {
        type: objectId,
        ref: "Product",
      },
    },
  ],
});

const Shopping = mongoose.model("Shopping", shoppingSchema);

module.exports = Shopping;
