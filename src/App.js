import React, { useState, Fragment } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Question from "./components/Question/Question";
import Wrapper from "./components/Wrapper/Wrapper";
import NextBtn from "./components/NextBtn/NextBtn";
import "./media.css";
import Finish from "./components/Finish/Finish";

function App() {
  /**
   * 1. Хранить текущий вопрос в качестве индекса (0, 1, 2) - const [currentQuestion, setCurrentQuestion] = useState(0)
   * 2. Из nextbtn получаем событие клика и когда оно произошло - мы меняем currentQuestion на currentQuestion + 1
   * 3. В твоем компоненте который принимает индекс - нужно подписаться на изменение этого индекса через useEffect =>
   *
   */

  let [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedBirdFromApp, setSelectedBirdFromApp] = useState(0);
  const changeSelectedBirdFromApp = bird => setSelectedBirdFromApp(bird);

  function ReRender() {
    if (currentQuestion >= 5) {
      return <Finish />
    }
    return <Fragment>
      <Question selectedBirdFromApp={selectedBirdFromApp} currentQuestion={currentQuestion} />
      <NextBtn setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} selectedBirdFromApp={selectedBirdFromApp} />
      <Wrapper onBirdClickApp={changeSelectedBirdFromApp} currentQuestion={currentQuestion} />
    </Fragment>
  }

  return (
    <div className="container">
      <Header currentIndex={currentQuestion} />
      <Question selectedBirdFromApp={selectedBirdFromApp} currentQuestion={currentQuestion} />
      <NextBtn setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} selectedBirdFromApp={selectedBirdFromApp} />
      <Wrapper onBirdClickApp={changeSelectedBirdFromApp} currentQuestion={currentQuestion} />
      {/* <ReRender /> */}
    </div>
  );
}

export default App;