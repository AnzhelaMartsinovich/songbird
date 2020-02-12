import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Question from './components/Question/Question'
import Wrapper from './components/Wrapper'
import NextBtn from './components/Next/NextBtn'
import './media.css';

function App() {

  const [selectedBirdFromApp, setSelectedBirdFromApp] = useState(0);
  const changeSelectedBirdFromApp = (bird) => setSelectedBirdFromApp(bird);

  return (
    <div className="container">
      <Header />
      <Question selectedBirdFromApp={selectedBirdFromApp} />
      <NextBtn />
      <Wrapper onBirdClickApp={changeSelectedBirdFromApp} />

    </div>
  );
}

export default App;