import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    priority: {
        type: Number,
        min: 0,
        max: 5,
    },
    // to make sure the task is assigned to the user creating it
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
}, {
    timestamps: true,
});

const Events = mongoose.model('Events', eventSchema);

export default Events;