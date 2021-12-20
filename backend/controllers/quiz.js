const Quiz = require("../models/quizSchema");
const slugify = require("slugify");

const quizCtrl = {
  create: (req, res) => {
    const categotyObj = {
      prompt: req.body.prompt,
      optionA : req.body.optionA,
      optionB : req.body.optionB,
      optionC : req.body.optionC,
      optionD : req.body.optionD,
      answer : req.body.answer
    };


    const cat = new Quiz(categotyObj);
    cat.save((err, category) => {
      if (err) return res.status(400).json({ err });

      if (category) {
        return res.status(201).json({ category });
      }
    });
  },

  get: (req, res) => {
    Quiz.find({}).exec((error, categories) => {
      if (error) return res.status(400).json({ error });

      if (categories) {
        return res.status(200).json({ categories });
      }
    });
  },


};

module.exports = quizCtrl;
