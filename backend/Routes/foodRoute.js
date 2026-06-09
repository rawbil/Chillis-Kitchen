const express = require("express");
const route = express.Router();
const foodModel = require("../Models/foodModel");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

const upload = multer({ storage: multer.memoryStorage() });

function uploadToCloudinary(file) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "chillis-kitchen/foods" },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      },
    );

    stream.end(file.buffer);
  });
}

//POST API/FOOD/ADD
route.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    if (!name || !description || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, description, price and category of food",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please provide an image",
      });
    }

    const cloud = await uploadToCloudinary(req.file);

    const newFood = await foodModel.create({
      name,
      description,
      price,
      category,
      image: {
        public_id: cloud.public_id,
        url: cloud.secure_url,
      },
    });

    res.json({ success: true, message: "Food Added", data: newFood });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
});

//POST API/FOOD/REMOVE
route.post("/remove", async (req, res) => {
  try {
    const food = await foodModel.findById(req.body._id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    if (food.image?.public_id) {
      await cloudinary.uploader.destroy(food.image.public_id);
    }

    await foodModel.findByIdAndDelete(req.body._id);
    res.json({ success: true, message: "Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Error" });
  }
});

//GET API/FOOD/LIST
route.get("/list", async (req, res) => {
  try {
    const foodList = await foodModel.find();
    res.json({ success: true, data: foodList });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
});

module.exports = route;
