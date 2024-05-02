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
        // res.status(200).res.send(req.body)
        res.status(200).redirect('/user')
    } catch (err) {
        res.status(400).send(err)
    }
});

//CREATE/POST Route
router.post('/', async (req, res) => {
    try {
        const createdUser = await User.create(req.body);
        // res.status(200).send(createdUser);
        res.status(200).redirect('/user')
    } catch (err) {
        res.status(400).send(err);
    }
    });


//initial READ/GET Route
router.get('/', async (req, res) => {
    try {
        const foundUser = await User.find({});
        res.status(200).send(foundUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

//READ Route - Pulling a user by ID using a get route 
router.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        res.status(200).json(foundUser)
    } catch (err) {
        res.status(404).send(err);
    }
})

//UPDATE/PUT Route
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true},
        );
            // res.status(200).send(updatedUser)
        res.redirect(`/user/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
});


//DELETE Route
router.delete('/:id', async(req, res) => {
    try{
        const deletedUsers = await User.findByIdAndDelete(req.params.id);
        console.log(deletedUsers);
        res.status(200).redirect('/user');
    } catch (err) {
        res.status(400).send(err);
    }
})


export default router;