// routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminControllers");
const { verifyApiKey } = require("../middleware/apiKeyMiddleware");

router.post("/addTrain", verifyApiKey, adminController.addTrain);
router.put(
  "/update-seats/:trainId",
  verifyApiKey,
  adminController.updateTrainSeats
);

module.exports = router;
