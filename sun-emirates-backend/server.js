const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

/* Middleware */

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* MongoDB Connection */

const MONGODB_URI =
process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/sunemirates";

mongoose
.connect(MONGODB_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("MongoDB connection error:", err));

/* Routes */

const contactRoutes = require("./routes/contact");

app.use("/api/contact", contactRoutes);

/* Serve React */

app.use(express.static(path.join(__dirname, "../sun-emirates-frontend/build")));

app.get("*", (req, res) => {
res.sendFile(
path.join(__dirname, "../sun-emirates-frontend/build/index.html")
);
});

/* Error Handler */

app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).json({ message: "Server Error" });
});

/* Start Server */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});