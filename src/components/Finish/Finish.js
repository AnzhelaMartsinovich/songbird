import React from 'react';
import './style.scss';

function Finish({ currentQuestion, setCurrentQuestion, value, setValue }) {
	let newRound = () => { setCurrentQuestion(currentQuestion = 0) };
	let resetValue = () => { setValue(value = 0) }
	const handleClick = () => {
		newRound();
		resetValue();
	}

	if (value === 25) {
		return (
			<div className="finish">
				<h4 className="finish-title">Да вы знаток! Вы справились великолепно, поздравляем вас с чистой победой!
			</h4>
				<h4 className="finish-score">Вы набрали {value} баллов из 25.</h4>
				<h5 className="finish-subtitle">
					Хотите сыграть еще раз?</h5>
				<button className="finish-btn" onClick={handleClick}>Повторить</button>
			</div>
		)
	}
	return (
		<div className="finish">
			<h4 className="finish-title">Вопросы закончились, поздравляем вас с победой!
			</h4>
			<h4 className="finish-score">Вы набрали {value} баллов из 25.</h4>
			<h5 className="finish-subtitle">
				Хотите сыграть еще раз?</h5>
			<button className="finish-btn" onClick={handleClick}>Повторить</button>
		</div>
	)
}

export default Finish;