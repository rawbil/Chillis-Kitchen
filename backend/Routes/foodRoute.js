const express = require('express');
const route = express.Router();
const foodModel = require('../Models/foodModel');
const multer = require('multer');
const cloudinary = require('cloudinary').v2; //version 2 for the latest api
const { CloudinaryStorage } = require('multer-storage-cloudinary'); //cloudinary storage
const fs = require('fs');

//image storage engine
/* const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname.trim()}`);
    }
}) */

//set up cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

//set up Cloudinary storage for Multer
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: {
            folder: 'food_images', //Optional: Specify a folder for the images in cloudinary
            /* allowed_formats: ['jpg', 'jpeg', 'png'],  *///Optional: restrict formats
        }
    }
})

const upload = multer({storage: storage}) 

//POST API/FOOD/ADD
route.post('/add',upload.single('image'), async(req, res) => {
    try {
        const image_url = req.file.path; //Cloudinary provides the url in `req.file.path`
        const {name, description, price, category} = req.body;
        const newFood = await foodModel.create({
            name,
            description,
            price, 
            category, 
            image: image_url //store the image in the database
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

        //Also remove the image from the storage
        //Extract the public_id from the image URL (assuming image URL includes public_id);
        const public_id = food.image.split('/').pop.split('.')[0];
        await cloudinary.uploader.destroy(public_id)

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