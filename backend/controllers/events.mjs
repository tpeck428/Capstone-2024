import express from 'express';
const router = express.Router();
import Events from '../models/events.mjs'
import db from '../db/connection.mjs';

//CREATE/POST Route
router.post('/', async (req, res) => {
    try {
        const createdEvent = await Events.create(req.body);
        res.status(200).send(createdEvent);
        // res.status(200).redirect('/events')
    } catch (err) {
        res.status(400).send(err);
    }
    });


//initial READ/GET Route
router.get('/', async (req, res) => {
    try {
        const foundEvents = await Events.find({});
        res.status(200).send(foundEvents);
    } catch (err) {
        res.status(400).send(err);
    }
});

//READ Route - Pulling a user by ID using a get route 
// router.get('/:id', async (req, res) => {
//     try {
//         const foundTasks = await Tasks.findById(req.params.id);
//         res.status(200).json(foundTasks)
//     } catch (err) {
//         res.status(404).send(err);
//     }
// })

//UPDATE/PUT Route
// router.put('/:id', async (req, res) => {
//     try {
//         const updatedTasks = await Tasks.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true},
//         );
//             // res.status(200).send(updatedUser)
//         res.redirect(`/tasks/${req.params.id}`);
//     } catch (err) {
//         res.status(400).send(err);
//     }
// });


//DELETE Route
// router.delete('/:id', async(req, res) => {
//     try{
//         const deletedTasks = await Tasks.findByIdAndDelete(req.params.id);
//         console.log(deletedTasks);
//         res.status(200).redirect('/tasks');
//     } catch (err) {
//         res.status(400).send(err);
//     }
// })



export default router;