const {Router} = require('express');
const moviesRouter = require('./moviesRouter');

const router = Router();

//* redirects incoming request to especific entity router based on endpoint
router.use('/movies', moviesRouter);

module.exports = router;
