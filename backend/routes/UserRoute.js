import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/userModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const userAdded = await User.create({
            name,
            email,
            age,
        });
        res.status(201).json(userAdded);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message }); // Corrected the status method
    }
});

router.get("/", async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message }); // Corrected the status method
    }

    // Remove this line to avoid sending multiple responses
    // res.send("API running");
});


//get single user
router.get("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const data = await User.findById({_id:id});
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message }); // Corrected the status method
    }

    // Remove this line to avoid sending multiple responses
    // res.send("API running");
});

//delete operation
router.delete("/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const data = await User.findByIdAndDelete({_id:id});
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message }); // Corrected the status method
    }

    // Remove this line to avoid sending multiple responses
    // res.send("API running");
});

//update operation
router.patch("/:id",async(req,res)=>{
    const {id} = req.params;
    const {name,email,age} = req.body;
    try {
        const update = await User.findByIdAndUpdate(id,req.body,{
            new:true,
        });
        res.status(200).json(update); 
    } catch (error) {
        res.status(400).json({ error: error.message }); // Corrected the status method
    }
});


export default router;