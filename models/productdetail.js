const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Manufacturer: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  Available_in_Stock: {
    type: Number,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", productSchema);
