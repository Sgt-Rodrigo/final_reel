const moviesService = require("../services/moviesService");

module.exports = {
  async getAllMovies(req, res) {
    try {
      const movies = await moviesService.fetchMovies();
      //* parse axios returned object into json to send
      res.json(movies);
    } catch (error) {
      res.status(500).json({
        error: "error interno del servidor",
      });
    }
  },

  async addMovie(req, res) {
    // const { title, year, director, duration, genre, rate, poster} = req.body;
  try {
      const newMovie = await moviesService.addMovie(req.body);
      res.status(201).json(newMovie);
  } catch (error) {
    
  }
  },

  async getMovieById(req, res) {
    const {id} = req.params;
    const movie = await moviesService.getMovieById(id);
    res.status(200).json(movie);
  },

  async getMovieByTitle(req, res) {
    const {title} = req.body;
    const movie = await moviesService.getMovieByTitle(title);
    res.status(200).json(movie);
  },

  deleteAllMovies(req, res) {
    res.send("This will delete all movies in the later on");
  },
};
