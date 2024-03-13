//*? creates async function to connect to DB (it is called in index.js)
require('dotenv').config();
const mongoose = require('mongoose');


const dbURI = process.env.MONGO_URI;

const dbCon = async ()=>{
   await mongoose.connect(dbURI)
};

module.exports = dbCon;