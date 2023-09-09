const NotFoundError = require("../errors/notFound-error");
const Product = require("../model/product");

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(200).json({ product });
};
const getAllProduct = async (req, res) => {
  const products = await Product.find({});

  res
    .status(200)
    .json({ status: "success", result: products.length, data: products });
};
const singleProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOne({ _id: id });
  if (!product) {
    throw new NotFoundError("Product not found");
  }
  res.status(200).json({ status: "success", data: product });
};
const updateProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  if (!product) {
    throw new NotFoundError("Product not found");
  }
  res.status(200).json({ status: "success", data: product });
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const product = await Product.deleteOne({ _id: id });
  if (!product) {
    throw new NotFoundError("Product not found");
  }
  res.status(204).json({ status: "success", data: null });
};

module.exports = {
  createProduct,
  getAllProduct,
  singleProduct,
  updateProduct,
  deleteProduct,
};
