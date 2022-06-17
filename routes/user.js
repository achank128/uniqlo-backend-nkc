const router = require("express").Router();

const {
  authenticate,
  authenticateUser,
  authenticateAdmin,
} = require("../middleware/authentication");
const {
  getAllUsers,
  getUser,
  updateUserPassword,
} = require("../controllers/userController");

router.get("/", authenticateAdmin, getAllUsers);
router.get("/:id", authenticateUser, getUser);
router.put("/updatePass/:id", authenticateUser, updateUserPassword);

module.exports = router;
