const express = require('express');
const router = require('./routes');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev')); //*? outputs useful traffic data
app.use(cors()); //*? for security and availability
app.use(express.json()); //*? parses the req to a JS object.

//* my personalized middleware
app.use((req, res, next)=>{
    console.log('request traversing my own middleware');
    next();
})

//* redirects all incoming requests to main router
app.use(router);

module.exports = app;