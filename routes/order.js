const router = require("express").Router();

const {
  authenticate,
  authenticateUser,
  authenticateAdmin,
} = require("../middleware/authentication");
const {
  createOrder,
  getAllOrders,
  getOrder,
  getUserOrders,
  getUserPurchase,
  updateStatusOrder,
} = require("../controllers/orderController");

router
  .route("/")
  .get(authenticateAdmin, getAllOrders)
  .post(authenticate, createOrder);
router.route("/myOrders").get(authenticate, getUserOrders);
router.route("/myPurchase").get(authenticate, getUserPurchase);
router
  .route("/:id")
  .get(authenticate, getOrder)
  .put(authenticateAdmin, updateStatusOrder);

module.exports = router;
