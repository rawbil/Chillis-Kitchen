const express = require('express');
const route  = express.Router();
const userModel = require('../Models/userModel');
const jwt = require('jsonwebtoken');
const validator = require('validator');//install this!!!
const bcrypt = require('bcrypt')

//POST API/USER/LOGIN
route.post("/login", async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email})
        if(!user) {
            return res.json({success: false, message: "User doesn't exist"});
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) {
            return res.json({success: false, message: "Invalid credentials"})
        }

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
        res.json({success: true, token})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
})


//POST API/USER/SIGNUP
route.post("/signup", async(req, res) => {
    try {
        const {name, password, email} = req.body;
        //check if user already exists
        const exists = await userModel.findOne({email});
        if(exists) {
            return res.json({success: false, message: "User already exists"})
        }

        //validator email and password
        if(!validator.isEmail(email)) {
           return res.json({success: false, message: "Please use the correct email format"})
        }

        if(!validator.isStrongPassword(password)) {
            return res.json({success: false, message: "Password should be at least 8 characters, have at least one special character, uppercase letter and lowercase letter"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            name,
            password: hashedPassword,
            email
        })

        //token
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
        res.json({success: true, token})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
})


module.exports = route