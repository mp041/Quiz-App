const mongoose = require('mongoose');


const quizSchema = new mongoose.Schema({
  prompt : {
    type : String,
    require : true,

  },
  optionA   : {
    type : String,
    require : true,


  },
  optionB : {
    type : String,
    require : true,
  },

  optionC  : {
    type : String,
    require : true,

  },
  optionD : {
    type : String,
    require : true,

  },
  answer : {
    type : String,
    require : true,

  },


}, {timestamps : true} )


module.exports = mongoose.model('Quiz', quizSchema);
