// middleware/apiKeyMiddleware.js
require("dotenv").config();

const verifyApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(403).json({ message: "Forbidden" });
  }
  next();
};

module.exports = { verifyApiKey };
