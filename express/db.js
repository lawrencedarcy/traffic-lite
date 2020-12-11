const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.7fccc.mongodb.net/<dbname>?retryWrites=true&w=majority`


mongoose.connect(DATABASE, {useNewUrlParser: true}, (err) => {
  if(err) console.log(err);// eslint-disable-line
  console.log('mongoose connected!');// eslint-disable-line
  
});



module.exports = mongoose;

