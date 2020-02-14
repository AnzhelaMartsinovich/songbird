import React from 'react';
import './style.scss';
import resetClassPoints from './resetClassPoints';

function NextBtn({ setCurrentQuestion, currentQuestion, setGoal, goal }) {
	let counter = () => { setCurrentQuestion(currentQuestion + 1) };
	let train = () => { setGoal(false) }

	const handleClick = () => {
		counter();
		resetClassPoints();
		train();
	};

	return (
		<button
			onClick={handleClick}
			className="next-btn"
			disabled={goal === true ? false : true}
		>
			Следующий уровень
		</button>
	)
}

export default NextBtn