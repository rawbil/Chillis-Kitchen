const express = require('express');
const route = express.Router();
const userModel = require('../Models/userModel');
const jwt = require('jsonwebtoken')

//authMiddleware
const authMiddleware = async(req, res, next) => {
    const {token} = req.headers;
    if(!token) {
       return res.json({success: false, message: "Authorization failed, Login again"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.userId;
        next();
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
}

//POST API/CART/ADD
route.post("/add", authMiddleware, async(req, res) => {
    try {
        
    } catch (error) {
        
    }
})

//POST API/CART/REMOVE
route.post('/remove', authMiddleware, async(req, res) => {
    try {
        
    } catch (error) {
        
    }
})

//GET API/CART/GET
route.post('/get', authMiddleware, async(req, res) => {
    try {
        
    } catch (error) {
        
    }
})

module.exports = route;