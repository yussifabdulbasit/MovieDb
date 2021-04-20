import mongoose from 'mongoose';


const Schema = mongoose.Schema;

export const MoviesSchema = new Schema({
    Name: {
        type: String,
        required: true
    },

    Company: {
        type: String,
        required: true
    },

    Title: {
        type: String,
        required: true
    },

    created_date:{
        type: Date,
        default: Date.now
    }
});