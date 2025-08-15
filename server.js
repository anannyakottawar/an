const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 4000;

const mongoURL = "mongodb+srv://anu24:anu24@cluster0.uo0ueur.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose.connect(mongoURL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Middleware
app.use(cors());
app.use(express.json());

// Serve static uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api", require("./routes/videoUpload"));
app.use("/api", require("./routes/upload"));
app.use("/api", require("./routes/auth"));
app.use("/api", require("./routes/userRoutes"));
app.use("/api", require("./routes/productRoutes"));
app.use("/api", require("./routes/profile"));

// Root route
app.get("/", (req, res) => {
  res.send("API is working fine");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
