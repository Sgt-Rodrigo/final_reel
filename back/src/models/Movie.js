const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    //* mongoose provides the _id > no need to declare it here
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Number,
    poster: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;