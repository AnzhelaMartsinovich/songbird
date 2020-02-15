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
  let [clickedPoint, setClickedPoint] = useState(false);

  function checkTrueAnswer(props) {
    const target = props.event.target;
    const clickedBird = target.textContent;

    if (clickedBird === answer[currentQuestion].name) {
      setClickedPoint(true);
    }
    clickedPoint = props.clickedPoint;
    return clickedPoint;
  }

  const [countAnswersClick, setCount] = useState(0);
  let [score, setScore] = useState(0);

  function numberOfClicks(props) {
    if (clickedPoint === false) {
      setCount(countAnswersClick + 1)
    }
    const target = props.event.target;
    const clickedBird = target.textContent;

    if (clickedBird === answer[currentQuestion].name) {
      if (countAnswersClick === 0) {
        return setScore(score += 5)
      } else if (countAnswersClick === 1) {
        return setScore(score += 4)
      } else if (countAnswersClick === 2) {
        return setScore(score += 3)
      } else if (countAnswersClick === 3) {
        return setScore(score += 2)
      } else if (countAnswersClick === 4) {
        return setScore(score += 1)
      } else {
        return setScore(score += 0)
      }
    }
  }

  if (currentQuestion !== 5) {
    return (
      <div className="container">
        <Header currentIndex={currentQuestion} score={score} />
        <Question currentQuestion={currentQuestion} clickedPoint={clickedPoint} />
        <NextBtn setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} setClickedPoint={setClickedPoint} clickedPoint={clickedPoint} setCount={setCount} />
        <Wrapper currentQuestion={currentQuestion} checkTrueAnswer={checkTrueAnswer} clickedPoint={clickedPoint} numberOfClicks={numberOfClicks} />
      </div>
    );
  }

  return (
    <div className="container">
      <Header currentIndex={currentQuestion} score={score} />
      <Finish setCurrentQuestion={setCurrentQuestion} currentIndex={currentQuestion} score={score} setScore={setScore} />
    </div>
  )
}

export default App;