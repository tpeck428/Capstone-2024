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
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
}, {
    timestamps: true,
});

const Tasks = mongoose.model('Tasks', userSchema);

export default Tasks;