import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Wrapper from "./components/Wrapper/Wrapper";
import NextBtn from "./components/NextBtn/NextBtn";
import "./media.css";
import Finish from "./components/Finish/Finish";
import answer from './helpers/answers'

function App() {
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [goal, setGoal] = useState(false);

  function checkTrueAnswer(props) {
    const target = props.event.target;
    const clickedBird = target.textContent;

    if (clickedBird === answer[currentQuestion].name) {
      setGoal(true);
    }
    goal = props.goal;
    return goal;
  }

  if (currentQuestion !== 5) {
    return (
      <div className="container">
        <Header currentIndex={currentQuestion} />
        <Question currentQuestion={currentQuestion} goal={goal} />
        <NextBtn setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} setGoal={setGoal} goal={goal} />
        <Wrapper currentQuestion={currentQuestion} checkTrueAnswer={checkTrueAnswer} goal={goal} />
      </div>
    );
  }

  return (
    <div className="container">
      <Header currentIndex={currentQuestion} />
      <Finish setCurrentQuestion={setCurrentQuestion} currentIndex={currentQuestion} />
    </div>
  )
}

export default App;