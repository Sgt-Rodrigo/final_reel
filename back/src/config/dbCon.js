require('dotenv').config();
const mongoose = require('mongoose');


const dbURI = process.env.MONGO_URI;

const dbCon = async ()=>{
   await mongoose.connect(dbURI)
};

module.exports = dbCon;