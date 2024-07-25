import express from "express";
import mongoose from "mongoose";
//const dotenv = require("dotenv");
import dotenv from "dotenv";
const app = express();
import userRoute from "./routes/UserRoute.js";
app.use(express.json());
import cors from "cors";
app.use(cors());
dotenv.config();

mongoose.connect(process.env.URI, {
    //useNewUrlParser: true,
    //useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB successfully");
})
.catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use( userRoute);
