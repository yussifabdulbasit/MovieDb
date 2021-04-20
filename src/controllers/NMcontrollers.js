import mongoose from 'mongoose';
import {MoviesSchema} from '../models/NMmodels.js';

const Movies = mongoose.model('Movies', MoviesSchema);

export const addNewMovies = (req, res) => {

    let newMovies = new Movies(req.body);
    newMovies.save((error, Movies) => {
        if(error){
            res.send(error);
        }else{
            res.json(Movies);
        }
    });
}

export const getMovies = (req, res) => {
    Movies.find({}, (error, Movies) => {
        if(error){
            res.send(error)
        }else{
            res.json(Movies);
        }
    });
}

export const getMoviesWithID = (req, res) => {
    Movies.findById({_id:req.params.MoviesID}, (error, Movies) => {
        if(error){
            res.send(error);
        }else{
            res.json(Movies);
        }
    });
}

export const updateMovies = (req, res) => {
    Movies.findOneAndUpdate({_id: req.params.MoviesID}, req.body, {new: true, useFindAndModify: false}, (error, Movies) => {
        if(error){
            res.send(error);
        }else{
            res.json(Movies)
        }
    });
}

export const deleteMovies = (req, res) => {
    Movies.deleteOne({_id: req.params.MoviesID}, (error, Movies) => {
        if(error){
            res.send(error)
        }else{
            res.json({message: 'delete request succesfully'});
        }
    })
}