const express = require("express");
const authMiddleware = require("../middleware/auth-middleware");

const router = express.Router();

// Protect this home routes for authenticated user only
router.get("/welcome", authMiddleware, (req, res) => {
  const { username, userId, role } = req.userInfo;

  res.status(200).json({
    succcss: true,
    message: "Welcome to home route",
    user: {
      _id: userId,
      username,
      role,
    },
  });
});

module.exports = router;
