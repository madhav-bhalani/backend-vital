const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = Schema.Types.ObjectId;

const addressSchema = new Schema({
  name: {
    type: String,
    default: "Address",
  },
  house: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
  },
  zipcode: {
    type: String,
    required: true,
  },
  user: {
      type: objectId,
      ref: "User",
  }
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
