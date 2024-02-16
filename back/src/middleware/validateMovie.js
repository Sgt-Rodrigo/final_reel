const validateMovie = (req, res, next) => {

  console.log('VALIDATING...',req);

  const inputs = [
    "title",
    "year",
    "director",
    "duration",
    "genre",
    "rate",
    "poster",
  ];

//   const year = parseInt(req.body.year);
//   const rate = parseInt(req.body.rate); 
    //*? matches 1900 - 2099
  const yearRegex = /^(?:19|20)\d{2}$/; 
  //*? matches rating from 1 - 10 and optional decimals from 0.1 - 0.9
  const rateRegex = /^10$|^[1-9](\.\d)?$|^0\.[1-9]$/;
  //*? extends 3 years ahead for  upcoming movies
  const yearLimit = new Date().getFullYear() + 3;


  //*! checks for empty fields
  for (const input of inputs) {
    if (!req.body[input]) {
      return res.status(400).json({ error: `${input.toUpperCase()} is missing` });
    }
  }

  //*! checks year format
  if (isNaN(parseInt(req.body.year)) || !req.body.year.match(yearRegex) || parseInt(req.body.year) > yearLimit) {
    return res.status(400).json({ error: `Year is invalid: choose from 1900 - ${yearLimit}` });
  }

  //*! checks rate format

  if (isNaN(parseFloat(req.body.rate)) || !req.body.rate.match(rateRegex)) {
    return res.status(400).json({ error: `Rate is invalid: choose from 0 to 10` });
  }

  //*? if all data is valid > continue processing

  next();
 
};

module.exports = validateMovie;
