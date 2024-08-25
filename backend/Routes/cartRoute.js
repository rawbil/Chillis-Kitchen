const express = require("express");
const route = express.Router();
const userModel = require("../Models/userModel");
const jwt = require("jsonwebtoken");

//authMiddleware
const authMiddleware = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, message: "Not authorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//POST API/CART/ADD
route.post("/add", authMiddleware, async (req, res) => {
  try {
    const userData = await userModel.findById(req.body.userId);
    let cartItem = await userData.cartItem;
    if(!cartItem[req.body.itemId]) {
        cartItem[req.body.itemId] = 1;
    }
    else {
        cartItem[req.body.itemId] += 1
    }
    await userModel.findByIdAndUpdate(req.body.userId, {cartItem});
    res.json({success: true, message: "Added to cart"});
  } catch (error) {}
});

//POST API/CART/REMOVE
route.post("/remove", authMiddleware, async (req, res) => {
  try {
  } catch (error) {}
});

//POST API/CART/GET
route.post("/get", authMiddleware, async (req, res) => {
  try {
  } catch (error) {}
});

module.exports = route;