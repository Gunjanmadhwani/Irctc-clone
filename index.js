const express = require("express");
const dotenv = require("dotenv");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the API root!");
});

// API routes
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running on port ${PORT}`)
);
