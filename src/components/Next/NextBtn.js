import React from 'react';
import './style.scss';
import answers from './../../helpers/answers';

function NextBtn({ setCurrentQuestion, currentQuestion, selectedBirdFromApp }) {
	return (
		<button
			onClick={() => setCurrentQuestion(currentQuestion + 1)}
			className="next-btn"
			disabled={selectedBirdFromApp.name !== answers[currentQuestion].name ? true : false}
		>
			Следующий уровень
		</button>
	)
}

export default NextBtn