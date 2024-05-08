import express from 'express';
const router = express.Router();
import User from '../models/users.mjs';
import cors from "cors";
import db from '../db/connection.mjs';

//Middleware
router.use(
    cors({
        credentials: true,
        origin: 'https://localhost:5173'
    })
)


//Seed Route - may not need
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
        // res.status(200).redirect('/user')
    } catch (err) {
        res.status(400).send(err)
    }
});

//CREATE/POST Route
router.post('/', async (req, res) => {
    console.log('received post request for new user')
    try {
        const {fullName, username, email, password} = req.body
        
        //check if name was entered
        if(!fullName) {
            return res.json({
                error: 'Name is required'
            })
        };
        //check if name was entered
        if(!username) {
            return res.json({
                error: 'Username is required'
            })
        };

        //check if password is valid
        if (!password || password.length < 6){
            return res.json({
                error: "Password is requried and should be at least 6 characters long"
            })
        }

        //check email validation
        const exist = await User.findOne({email});
        if(exist) {
            return res.json({
                error: 'Email is already in use'
            })
        }

        //replacing seed route to create user in database
        const user = await User.create({
            fullName, username, email, password
        })
        return res.status(200).res.send(user)
        

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
        res.redirect(`/newuser/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
});


//DELETE Route
router.delete('/:id', async(req, res) => {
    try{
        const deletedUsers = await User.findByIdAndDelete(req.params.id);
        console.log(deletedUsers);
        res.status(200).json(deletedUsers);
    } catch (err) {
        res.status(400).send(err);
    }
})


export default router;