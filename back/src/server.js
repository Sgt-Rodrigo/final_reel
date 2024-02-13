const express = require('express');
const router = require('./routes');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

//* my personalized middleware
app.use((req, res, next)=>{
    console.log('request traversing my own middleware');
    next();
})

//* redirects all incoming requests to main router
app.use(router);

module.exports = app;