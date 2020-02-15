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

  const [countAnswersClick, setCount] = useState(0);
  let [value, setValue] = useState(0);

  function numberOfClicks(props) {
    if (goal === false) {
      setCount(countAnswersClick + 1)
    }
    const target = props.event.target;
    const clickedBird = target.textContent;

    if (clickedBird === answer[currentQuestion].name) {
      if (countAnswersClick === 0) {
        return setValue(value = value + 5)
      } else if (countAnswersClick === 1) {
        return setValue(value = value + 4)
      } else if (countAnswersClick === 2) {
        return setValue(value = value + 3)
      } else if (countAnswersClick === 3) {
        return setValue(value = value + 2)
      } else if (countAnswersClick === 4) {
        return setValue(value = value + 1)
      } else {
        return setValue(value = value + 0)
      }
    }
  }

  if (currentQuestion !== 5) {
    return (
      <div className="container">
        <Header currentIndex={currentQuestion} value={value} />
        <Question currentQuestion={currentQuestion} goal={goal} />
        <NextBtn setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} setGoal={setGoal} goal={goal} setCount={setCount} />
        <Wrapper currentQuestion={currentQuestion} checkTrueAnswer={checkTrueAnswer} goal={goal} numberOfClicks={numberOfClicks} />
      </div>
    );
  }

  return (
    <div className="container">
      <Header currentIndex={currentQuestion} value={value} />
      <Finish setCurrentQuestion={setCurrentQuestion} currentIndex={currentQuestion} value={value} setValue={setValue} />
    </div>
  )
}

export default App;