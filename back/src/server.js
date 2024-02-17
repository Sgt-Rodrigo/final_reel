const express = require("express");
const router = require("./routes");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use((req, res, next) => {
  console.log("request body", req.body);
  next();
});

//*? outputs useful traffic data
app.use(morgan("dev"));
//*? for security and availability
app.use(cors());
//*? parses Json (from API client) to a JS object
app.use(express.json());
//*? parses urlencoded (from client html forms) to Js object.
app.use(express.urlencoded({ extended: true }));
//*? Express error handler overwrite
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ err: err.message });
});

//* my personalized middleware
app.use((req, res, next) => {
  console.log("request traversing my own middleware", req.body);
  next();
});

//* redirects all incoming requests to main router
app.use(router);

module.exports = app;
