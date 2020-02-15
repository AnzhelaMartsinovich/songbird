import React from 'react';
import './style.scss';
import resetClassPoints from './resetClassPoints';

function NextBtn({ setCurrentQuestion, currentQuestion, setGoal, goal, setCount }) {
	let counter = () => { setCurrentQuestion(currentQuestion + 1) };
	let resetGoal = () => { setGoal(false) }
	let resetCount = () => { setCount(0) }

	const handleClick = () => {
		counter();
		resetClassPoints();
		resetGoal();
		resetCount()
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