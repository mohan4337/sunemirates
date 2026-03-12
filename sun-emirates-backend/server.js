const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

/* ---------------- MIDDLEWARE ---------------- */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------------- MONGODB CONNECTION ---------------- */

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sunemirates";

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err.message);
  });

/* ---------------- ROUTES ---------------- */

// Contact Routes
const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

// Equipment Routes
const equipmentRoutes = require("./routes/equipment");
app.use("/api/equipment", equipmentRoutes);

// Gallery Routes
const galleryRoutes = require("./routes/gallery");
app.use("/api/gallery", galleryRoutes);

// Client Routes
const clientRoutes = require("./routes/clients");
app.use("/api/clients", clientRoutes);

/* ---------------- STATIC FRONTEND ---------------- */

app.use(express.static(path.join(__dirname, "../sun-emirates-frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../sun-emirates-frontend/build/index.html")
  );
});

/* ---------------- ERROR HANDLER ---------------- */

app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

/* ---------------- SERVER START ---------------- */

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
