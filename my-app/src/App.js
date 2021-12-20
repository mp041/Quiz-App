import logo from './logo.svg';
import './App.css';
import {useState,useContext} from 'react';
import MainPage from './Component/MainPage/MainPage';
import QuizPage from './Component/Quiz/Quiz';
import EndPage from './Component/EndPage/EndPage';
import {QuizContext} from "./helpers/Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {useEffect} from 'react';
import axios from 'axios';


function App() {
  const [quiz,setQuiz] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:5000/api/quiz').then((res) => {
        console.log(res.data.categories,"ressssssssssss");
        setQuiz(res.data.categories);
    }).catch((err) => {
      console.log(err);
    })
  },[])
  const [gameState , setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (

    <div>
    <Container className="text-center mt-4 p-5 card bg-light" style={{width: '100%',height: '100%' }}>
      {gameState === "menu" ? <h1 className="text-secondary">Quiz appp</h1> : null }
      <QuizContext.Provider value={{gameState,setGameState,score,setScore,quiz,setQuiz}} >
      {gameState === "menu" && <MainPage />}
      {gameState === "quiz" && <QuizPage />}
      {gameState === "endScreen" && <EndPage />}
      </QuizContext.Provider>
      </Container>
    </div>
  );
}

export default App;
