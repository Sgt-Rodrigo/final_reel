const moviesService = require('../services/moviesService');

module.exports = {
   async getAllMovies(req, res){
       try {
         const movies = await moviesService.fetchMovies();
        //* parse axios returned object into json to send
         res.json(movies);
       } catch (error) {
        res.status(500).json({
            error: 'error interno del servidor'
        })
       }
    },

    async insertMovie(req, res){
        const {title} = req.body;

        try {
            await moviesService.addMovie(title);
            res.status(201).json({
                message: `${title} added to database`
            })
        } catch (error) {
            res.status(500).json({
                error: 'movie could not be added'
            })
        }
    },

    deleteAllMovies(req, res){
        res.send('This will delete all movies in the later on')
    }
}