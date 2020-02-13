import React from 'react';
import './style.scss';
import answers from '../../helpers/answers';

function resetClassPoints() {
	let li = document.querySelectorAll('li.options-item');
	li.forEach(element => {
		element.className = 'options-item';
	});
}


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