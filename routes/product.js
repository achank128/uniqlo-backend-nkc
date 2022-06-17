const router = require("express").Router();

const {
  authenticate,
  authenticateUser,
  authenticateAdmin,
} = require("../middleware/authentication");

const {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.route("/").get(getAllProducts).post(authenticateAdmin, createProduct);
router
  .route("/:id")
  .get(getProduct)
  .put(authenticateAdmin, updateProduct)
  .delete(authenticateAdmin, deleteProduct);

module.exports = router;
