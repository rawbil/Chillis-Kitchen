const express = require('express');
const route = express.Router();
const userModel = require('../Models/userModel');
const jwt = require('jsonwebtoken')

//authMiddleware
const authMiddleware = async(req, res, next) => {
    const {token} = req.headers;
    if(!token) {
       return res.json({success: false, message: "Authorization failed"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.userId;
        next();
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Authorization failed"});
    }
}

//POST API/CART/ADD
route.post("/add", async(req, res) => {
    try {
        
    } catch (error) {
        
    }
})

//POST API/CART/REMOVE
route.post('/remove', async(req, res) => {
    try {
        
    } catch (error) {
        
    }
})

//FETCH CART DATA
route.post('/get', async(req, res) => {
    try {
        
    } catch (error) {
        
    }
})

module.exports = route;