const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserProfile,
  getAllUsers
} = require("../controllers/userController.js");

const {
  authenticateUser,
  authorizeRole
} = require("../middlewares/auth.middleware.js");

const {
  validateUserRegistration,
  validateLogin
} = require("../validators/authValidator.js");

// 🔓 Public routes
router.post("/register", validateUserRegistration, registerUser);
router.post("/login", validateLogin, loginUser);

// 🔐 Protected route - user profile
router.get("/profile", authenticateUser, getUserProfile);

// 🛡️ Admin-only route
router.get("/admin/users", authenticateUser, authorizeRole("admin"), getAllUsers);

module.exports = router;
