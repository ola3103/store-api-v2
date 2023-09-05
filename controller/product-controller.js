const Product = require("../model/product");

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({ product });
};
const getAllProduct = async (req, res) => {
  const product = await Product.find({});

  res.status(200).json({ product });
};
const singleProduct = async (req, res) => {
  res.status(200).json({ msg: "Single Product" });
};
const updateProduct = async (req, res) => {
  res.status(200).json({ msg: "Update Product" });
};
const deleteProduct = async (req, res) => {
  res.status(200).json({ msg: "Delete Product" });
};

module.exports = {
  createProduct,
  getAllProduct,
  singleProduct,
  updateProduct,
  deleteProduct,
};
