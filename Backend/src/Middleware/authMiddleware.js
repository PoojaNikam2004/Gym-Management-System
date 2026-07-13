import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    // Header se token lo
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. No Token Provided",
      });
    }

    // Format: Bearer <token>
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token Missing",
      });
    }

    // Token verify
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // User info request me store karo
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};

export default verifyToken;