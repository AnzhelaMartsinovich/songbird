import React from 'react';
import './style.scss';

function Finish({ currentQuestion, setCurrentQuestion }) {
	let newRound = () => { setCurrentQuestion(currentQuestion = 0) };

	return (
		<div className="finish">
			<h4 className="finish-title">Вопросы закончились, поздравляем вас с победой!</h4>
			<h4 className="finish-subtitle">Хотите сыграть еще раз?</h4>
			<button className="finish-btn" onClick={() => newRound({ currentQuestion, setCurrentQuestion })}>Повторить</button>
		</div>
	)
}

export default Finish;