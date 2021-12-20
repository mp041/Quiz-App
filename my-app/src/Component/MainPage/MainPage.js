import React,{useContext} from 'react'
import {QuizContext} from "../../helpers/Context";
import {Button} from 'react-bootstrap'



const MainPage = () => {
  const {gameState,  setGameState} = useContext(QuizContext);

  return (
    <div>

    <Button className="mt-3" variant="dark" onClick={() =>  {setGameState('quiz')}}>Start Quiz</Button>
    </div>
  )
}

export default MainPage
