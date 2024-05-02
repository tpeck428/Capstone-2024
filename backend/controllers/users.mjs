import express from 'express';
const router = express.Router();
import User from '../models/users.mjs';
import db from '../db/connection.mjs';

//Seed Route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try{
        await User.create([
                {
                  fullName: 'Kevyn Walters',
                  email: 'dolor.nonummy@google.com',
                  password: '321tlawk',
                  username: 'kwalt123'  
                },
                {
                  fullName: 'Maria Guzman',
                  email: 'tellus.eu@icloud.com',
                  password: '321zugm',
                  username: 'mguz123'  
                },

        ])
        res.status(200).res.send(req.body)
    } catch (err) {
        res.status(400).send(err)
    }
});

//CREATE/POST Route
router.post('/', async (req, res) => {
    try {
        const createdUser = await User.create(req.body);
        res.status(200).send(createdUser);
        // res.status(200).redirect('/users')
    } catch (err) {
        res.status(400).send(err);
    }
    });


//READ/GET Route
router.get('/', async (req, res) => {
    try {
        const foundUser = await User.find({});
        res.status(200).send(foundUser);
    } catch (err) {
        res.status(400).send(err);
    }
});





export default router;