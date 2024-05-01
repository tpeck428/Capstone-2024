import express from 'express';
const router = express.Router();
import Tasks from '../models/tasks.mjs';
import db from '../db/connection.mjs';


//Seed Route
// router.get("/seed", async (req, res) => {
//     console.log('in seed');
//     try{
//         await Tasks.create([
//                 {
                    
//                 },
//         ])
//         res.status(200).res.send(req.body)
//     } catch (err) {
//         res.status(400).send(err)
//     }
// });




export default router;