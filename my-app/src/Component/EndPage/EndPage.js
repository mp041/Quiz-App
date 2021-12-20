import React,{useContext} from 'react'
import {QuizContext} from "../../helpers/Context";
import {Questions} from "../../helpers/Qustions"
import {Button} from 'react-bootstrap';

const EndPage = () => {

  const {score,setScore,setGameState,quiz} = useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  }

  return (
    <div>
    <h1 className="text-secondary">Quiz Finished</h1>
  <h3 className="text-dark">{score} / {quiz.length}</h3>
<Button variant="dark"  onClick={restartQuiz}>Restart Quiz</Button>
    </div>
  )
}

export default EndPage
