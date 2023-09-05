const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100,
  },
  productImage: {
    type: String,
    required: true,
    trim: true,
  },
  productPriceCurrent: {
    type: Number,
    required: true,
    trim: true,
  },
  productPriceOld: {
    type: Number,
    required: true,
    trim: true,
  },
  productOfficialStatus: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
