import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Question from './components/Question/Question'
import Wrapper from './components/Wrapper'
import NextBtn from './components/Next/NextBtn'
import './media.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Question />
      <Wrapper />
      <NextBtn />
    </div>
  );
}

export default App;
