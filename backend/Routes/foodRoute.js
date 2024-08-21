const express = require('express');
const route = express.Router();
const foodModel = require('../Models/foodModel');
const multer = require('multer');
const fs = require('fs');

//image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname.trim()}`);
    }
})

const upload = multer({storage: storage})

//POST API/FOOD/ADD
route.post('/add',upload.single('image'), async(req, res) => {
    try {
        const image_filename = `${req.file.filename}`;
        const {name, description, price, category} = req.body;
        const newFood = await foodModel.create({
            name,
            description,
            price, 
            category, 
            image: image_filename
        });
        console.log(newFood);
        res.json({success: true, message: "Food Added"})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"}) 
    }
})

//POST API/FOOD/REMOVE
route.post('/remove', async(req, res) => {
    try {
        const food = await foodModel.findById(req.body._id);
        fs.unlink(`uploads/${food.image}`, () => {})

        const foodItem = await foodModel.findByIdAndDelete(req.body._id);
        res.json({success: true, message: "Deleted"})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
})

//GET API/FOOD/LIST
route.get('/list', async(req, res) => {
    try {
        const foodList = await foodModel.find();
        res.json({success: true, data: foodList})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
})


module.exports = route;