const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("EcoGrid Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
