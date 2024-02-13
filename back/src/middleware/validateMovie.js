const validateMovie = (req, res)=>{
    const {title} = req.body;

    if(!title){
       next('Title is missing')
    } else{
        next();
    }
}

module.exports = validateMovie;