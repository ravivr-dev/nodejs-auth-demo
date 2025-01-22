const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(404).json({
      success: false,
      message: "Access denied, no token provided! Please login to continue",
    });
  }

  try {
    const decodedTokeInfo = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodedTokeInfo);
    req.userInfo = decodedTokeInfo;
    next();
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Access denied, no token provided! Please login to continue",
    });
  }
};

module.exports = authMiddleware;
