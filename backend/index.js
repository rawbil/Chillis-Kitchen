const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");

mongoose.set("bufferCommands", false);

const mongoUri = process.env.MONGODBURI;
let databaseConnection;

function connectDatabase() {
  if (!mongoUri) {
    return Promise.reject(new Error("MONGODBURI is not configured"));
  }

  if (!databaseConnection) {
    databaseConnection = mongoose
      .connect(mongoUri, { serverSelectionTimeoutMS: 5000 })
      .then(() => {
        console.log(`Database connected: ${mongoose.connection.host}`);
      })
      .catch((error) => {
        databaseConnection = undefined;
        console.log("Database connection failed:", error.message);
        throw error;
      });
  }

  return databaseConnection;
}

const foodRoute = require("./Routes/foodRoute");
const userRoute = require("./Routes/userRoute");
const cartRoute = require("./Routes/cartRoute");

//END OF IMPORTS

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const configuredOrigins = [
  process.env.ORIGIN,
  process.env.FRONTEND_URL,
  process.env.ADMIN_URL,
  "https://chilliskitchen-online.vercel.app",
  "https://chillis-kitchen-admin.vercel.app",
  ...(process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(",") : []),
  "http://localhost:5173",
  "http://localhost:5174",
].filter(Boolean);

const allowedOrigins = new Set(configuredOrigins.map((origin) => origin.trim()));

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.has(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`CORS blocked origin: ${origin}`));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "token"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", async (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
    return;
  }

  try {
    await connectDatabase();
    next();
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Database connection error",
    });
  }
});

//Routes
app.use("/api/food", foodRoute);
app.use("/api/user", userRoute);
app.use("/api/cart", cartRoute);

app.use("/images", express.static("uploads"));

//welcome page
app.get("/", (req, res) => {
  res.send("Welcome Home");
});

//ERROR PAGE
app.use((req, res) => {
  res.status(404).send("404 Error");
});

if (process.env.VERCEL !== "1") {
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
}

module.exports = app;
