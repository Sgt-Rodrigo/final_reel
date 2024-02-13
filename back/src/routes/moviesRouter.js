const Router = require('express');
const moviesController = require('../controllers/moviesController');
const validateMovie = require('../middleware/validateMovie');

const moviesRouter = Router();

//* assigs controller based on request method
moviesRouter.get('/', moviesController.getAllMovies);
moviesRouter.post('/', validateMovie, moviesController.insertMovie);
moviesRouter.delete('/', moviesController.deleteAllMovies); 

module.exports = moviesRouter;