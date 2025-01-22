const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth-controller");

/// Create route
const router = express.Router();

// All routes are related to user authentication
router.post("/register", registerUser);

router.post("/login", loginUser);

module.exports = router;
