const express  = require('express');
const router = express.Router();
const Quiz = require('../models/quizSchema')
const quizCtrl = require('../controllers/quiz')




router.post('/quiz', quizCtrl.create)
router.get('/quiz', quizCtrl.get)
// router.get('/category/get',  categoryCtrl.getCategory);

module.exports = router;
