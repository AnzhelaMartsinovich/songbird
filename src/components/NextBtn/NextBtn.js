import React from 'react';
import './style.scss';
import resetClassPoints from './resetClassPoints';

function NextBtn({ setCurrentQuestion, currentQuestion, setClickedPoint, clickedPoint, setCount }) {
	let counter = () => { setCurrentQuestion(currentQuestion + 1) };
	let resetClickedPoint = () => { setClickedPoint(false) };
	let resetCount = () => { setCount(0) };

	const handleClick = () => {
		counter();
		resetClassPoints();
		resetClickedPoint();
		resetCount();
	};

	return (
		<button
			onClick={handleClick}
			className="next-btn"
			disabled={clickedPoint === true ? false : true}
		>
			Следующий уровень
		</button>
	)
}

export default NextBtn