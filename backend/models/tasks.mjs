import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    isPinned: {
        type: Boolean,
        default: false,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    // to make sure the task is assigned to the user creating it
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // },
}, {
    timestamps: true,
});

const Tasks = mongoose.model('Tasks', taskSchema);

export default Tasks;