const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProduct,
  singleProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product-controller");

router.route("/").get(getAllProduct).post(createProduct);
router
  .route("/:id")
  .get(singleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = router;
