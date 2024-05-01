import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please enter full name']
    },
    email: {
        type: String,
        required: [true, 'Please enter email'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
    },
    username: {
        type: String,
        required: [true, 'Please choose a username']
    }
});

const User = mongoose.model('User', userSchema);

export default User;