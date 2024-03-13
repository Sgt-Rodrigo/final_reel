//*? Controllers are the 'handlers'
const moviesService = require("../services/moviesService");
const catchAsync = require("../utils/catchAsync");

async function getAllMovies(req, res) {
  const movies = await moviesService.fetchMovies();
  //* parses axios returned object into json to send
  res.json(movies);
}

async function getAddMovieForm(req, res) {
  const form = await moviesService.getAddMovieForm();
  res.send(form);
}

async function addMovie(req, res) {
  // const { title, year, director, duration, genre, rate, poster} = req.body;
  const newMovie = await moviesService.addMovie(req.body);
  //* sends the data back to render new card without reload
  res.json(newMovie);
}

async function getMovieById(req, res) {
  const { id } = req.params;
  const movie = await moviesService.getMovieById(id);
  res.status(200).json(movie);
}

async function getMovieByTitle(req, res) {
  const { title } = req.body;
  const movie = await moviesService.getMovieByTitle(title);
  res.status(200).json(movie);
}

async function deleteAllMovies(req, res) {
  res.send("This will delete all movies in the later on");
}

module.exports = {
  getAllMovies: catchAsync(getAllMovies),
  addMovie: catchAsync(addMovie),
  getMovieById: catchAsync(getMovieById),
  getMovieByTitle: catchAsync(getMovieByTitle),
  deleteAllMovies: catchAsync(deleteAllMovies),
  getAddMovieForm: catchAsync(getAddMovieForm),
};
