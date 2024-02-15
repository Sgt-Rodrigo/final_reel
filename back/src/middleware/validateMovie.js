const validateMovie = (req, res, next) => {
  const inputs = [
    "title",
    "year",
    "director",
    "duration",
    "genre",
    "rate",
    "poster",
  ];

  //*! checks for empty fields
  for (const input of inputs) {
    if (!req.body[input]) {
      return next(new Error(`${req.body[input].toUpperCase()} is missing`));
    }
  }

  //*! checks year/rate are numbers
  if(req.body.year !== 'number' | req.body.rate !== 'num'){
    return next(new Error(` is missing`));
  }
  // if(!title){
  //    next(new Error('Title is missing'))
  // } else{
  //     next();
  // }
};

module.exports = validateMovie;
