// const axios = require('axios');
const Movie = require("../models/Movie");

module.exports = {
  async fetchMovies() {
    try {
      const movies = await Movie.find().sort({ _id: -1 });
      return movies;
    } catch (error) {
      console.log("Movies not found");
    }
  },

  async addMovie(reqBody) {
    const newMovie = Movie.create(reqBody);
    return newMovie;
  },

  async getMovieById(id) {
    const movie = await Movie.findById(id);
    return movie;
  },

  async getMovieByTitle(title) {
    const movie = await Movie.findOne({ title });
    return movie;
  },
};

// const URL = `https://students-api.2.us-1.fl0.io/movies`;

//* class with manual disjunction property verification (using OR |)
// class Movie {
//     constructor({title, poster, director, genre, duration, rate}) {
//         if(!title    | !poster |
//            !director | !genre  |
//            !duration | !rate){
//             throw new Error('All properties are required');
//            };

//            this.title = title,
//            this.poster = poster,
//            this.director = director,
//            this.genre = genre,
//            this.duration = duration,
//            this.rate = rate
//     }
// }

//* class with dynamic property verification
// class Movie {
//     constructor(movieData) {
//         const requiredProperties = [
//           "title",
//           "poster",
//           "director",
//           "genre",
//           "duration",
//           "rate",
//         ];

//         const missingProperties = requiredProperties.filter(property =>!Object.keys(movieData).includes(property))

//         //* verifies all properties are present in the incoming data
//         if(missingProperties.length > 0){
//             throw new Error('All properties are required');
//            };

//            this.title = movieData.title,
//            this.poster = movieData.poster,
//            this.director = movieData.director,
//            this.genre = movieData.genre,
//            this.duration = movieData.duration,
//            this.rate = movieData.rate
//     }
// }

// module.exports = {
//     async fetchMovies() {
//         try {
//             //* connects to movie API
//             const response = await axios.get(URL);
//             //* data alrady parsed to object by axios
//             const data = response.data;

//             const movies = data.map(movie => new Movie(movie));

//             return movies

//         } catch (error) {
//             console.log('error:', error);
//         }
//     },
// }
