import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";

import db from "./db/connection.mjs"

import userRoutes from './controllers/users.mjs'
import taskRoutes from './controllers/tasks.mjs'
import eventRoutes from './controllers/events.mjs'


//creating express application and other variables
const app = express();
const PORT = process.env.PORT || 5000;

//express middleware
app.use(express.json());

//bodyParser middleware
app.use(bodyParser.json());

//cors middleware
app.use(cors());

//jwt authentication

//Routes
app.use("/user", userRoutes);
app.use("/tasks", taskRoutes);
app.use("/events", eventRoutes);


//Get Route to check for working server in the browser
app.get("/", (req, res) => {
    res.send('Capstone Starter Server');
});


// Global error handling -- working
app.use((err, _req, res, next) => {
    res.status(500).send("seems like we messed up somewhere.")
})


//activates the server
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})