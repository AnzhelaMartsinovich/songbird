import React from 'react';
import './style.scss';
import answers from '../../helpers/answers';
import resetClassPoints from './resetClassPoints';

function NextBtn({ setCurrentQuestion, currentQuestion, selectedBirdFromApp }) {
	let counter = () => { setCurrentQuestion(currentQuestion + 1) };

	const handleClick = () => {
		counter();
		resetClassPoints();
	};

	return (
		<button
			onClick={handleClick}
			className="next-btn"
			disabled={selectedBirdFromApp.name !== answers[currentQuestion].name ? true : false}
		>
			Следующий уровень
		</button>
	)
}

export default NextBtn