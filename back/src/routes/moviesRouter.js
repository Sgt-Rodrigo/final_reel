const Router = require('express');
const moviesController = require('../controllers/moviesController');
const validateMovie = require('../middleware/validateMovie');

const moviesRouter = Router();

//* assigs controller based on request method
moviesRouter.post('/', validateMovie, moviesController.addMovie);
moviesRouter.get('/', moviesController.getAllMovies);
// moviesRouter.get('/:title', moviesController.getMovieByTitle);
moviesRouter.get('/title', moviesController.getMovieByTitle);

moviesRouter.delete('/', moviesController.deleteAllMovies); 

//*params
moviesRouter.get('/:id', moviesController.getMovieById);

module.exports = moviesRouter;