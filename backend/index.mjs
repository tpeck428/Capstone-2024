import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from 'cors'

import db from "./db/connection.mjs"



//creating express application and other variables
const app = express();
const PORT = process.env.PORT || 5000;

//allows express to read json?
app.use(express.json());

//cors middleware
app.use(cors());



//Get Route to check for working server in the browser
app.get("/", (req, res) => {
    res.send('Capstone Starter Server');
});




//activates the server
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})