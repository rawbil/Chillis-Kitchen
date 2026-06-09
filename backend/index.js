const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const foodRoute = require("./Routes/foodRoute");
const userRoute = require("./Routes/userRoute");
const cartRoute = require("./Routes/cartRoute");
const cors = require("cors");
import { v2 as cloudinary } from "cloudinary";
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODBURI)
  .then(() => {
    console.log(`Database connected: ${mongoose.connection.host}`);
  })
  .catch((error) => console.log(error));

//END OF IMPORTS

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const corsOptions = {
  origin: [
    process.env.ORIGIN,
    "http://localhost:5173",
    "http://localhost:5174",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "token"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Add before your routes
app.options("*", cors(corsOptions)); // Handle preflight requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
