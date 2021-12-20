import React,{useState,useContext,useEffect} from 'react'
import {Questions} from "../../helpers/Qustions"
import {QuizContext} from "../../helpers/Context"
import {Button} from 'react-bootstrap';
import axios from 'axios';

const QuizPage = () => {


  const {score, setScore,setGameState, quiz,setQuiz} = useContext(QuizContext);
  const [currQue, setCurrQue] = useState(0);
  const [optionChose, setOptionChose] = useState("");
  const [count, setCount] = useState(1);





  const dataaa = () => {
}


  const nextQuestion = () => {
    if(quiz[currQue].answer === optionChose){
      setScore(score +1);
    }
    setCurrQue(currQue + 1);
    setCount(count + 1)

  }
  const finishQuiz = () => {
    if(quiz[currQue].answer === optionChose){
      setScore(score +1);
    }

    setGameState("endScreen")
  }


  return (
    <>
    <div>
      {console.log(quiz,"quizzzzz")}

      <h1>{count}) &nbsp; {quiz[currQue].prompt}</h1>
  <div className="d-flex flex-column  justify-content-center align-items-center">
    <Button className="mt-3 w-25 p-auto"  variant="secondary" onClick={() =>{setOptionChose("A")} }>{quiz[currQue].optionA}</Button>
  <Button className="mt-3 w-25 p-auto" variant="secondary" onClick={() => {setOptionChose("B")} }>{quiz[currQue].optionB}</Button>
<Button className="mt-3 w-25 p-auto" variant="secondary" onClick={() => {setOptionChose("C")} }>{quiz[currQue].optionC}</Button>
  <Button className="mt-3 w-25 p-auto" variant="secondary" onClick={() => {setOptionChose("D")} }>{quiz[currQue].optionD}</Button>

    </div>
    {(currQue == quiz.length - 1) ? (
      <Button className="mt-3"  variant="dark" onClick={finishQuiz}>Finish Quiz</Button>

    ) : (
      <Button className="mt-3" variant="dark" onClick={nextQuestion}>Next Question</Button>

    )}
    </div>
    </>
  )
}

export default QuizPage


{/*
<>
<div>
  {quiz.categories.map((abc) => {
    console.log(abc.prompt)
  })}

<h1>{count}) &nbsp; {Questions[currQue].prompt}</h1>
<div className="d-flex flex-column  justify-content-center align-items-center">
<Button className="mt-3 w-25 p-auto"  variant="secondary" onClick={() =>{setOptionChose("A")} }>{Questions[currQue].optionA}</Button>
<Button className="mt-3 w-25 p-auto" variant="secondary" onClick={() => {setOptionChose("B")} }>{Questions[currQue].optionB}</Button>
<Button className="mt-3 w-25 p-auto" variant="secondary" onClick={() => {setOptionChose("C")} }>{Questions[currQue].optionC}</Button>
<Button className="mt-3 w-25 p-auto" variant="secondary" onClick={() => {setOptionChose("D")} }>{Questions[currQue].optionD}</Button>

</div>
{(currQue == Questions.length - 1) ? (
  <Button className="mt-3"  variant="dark" onClick={finishQuiz}>Finish Quiz</Button>

) : (
  <Button className="mt-3" variant="dark" onClick={nextQuestion}>Next Question</Button>

)}
</div>
</>
*/}
