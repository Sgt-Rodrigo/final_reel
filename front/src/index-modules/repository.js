import Movie from './movie';
// const uuid = require('uuid').v4;

export default class Repository {
    constructor(){
        this.allMovies = [];               
    }

    //* takes 1 movieObject  > pushes new movieObject + id
    addMovie(movieData){
        // const id = uuid();
        const newMovie = new Movie({...movieData});

        this.allMovies.push(newMovie);

        return newMovie
    }

    getAllMovies(){
        return this.allMovies
    }

    deleteAll(){
        this.allCards = [];
    }

    deleteMovieById(id) {
        const index = this.allMovies.findIndex(movie => movie.id === id);
        if (index > -1) {
            this.allMovies.splice(index, 1);
        }
    }
}