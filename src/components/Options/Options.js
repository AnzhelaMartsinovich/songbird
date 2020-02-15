import React from "react";
import "./style.scss";
import setStyleForClickBird from './setStyleForClickBird';

function Options({ birds, onBirdClick, currentQuestionIndex, checkTrueAnswer, clickedPoint, numberOfClicks }) {
	birds = birds[currentQuestionIndex];

	const handleClickLi = (bird) => {
		onBirdClick(bird);
	};

	const handleClickUl = (event) => {
		checkTrueAnswer({ event, clickedPoint });
		setStyleForClickBird({ currentQuestionIndex, event, clickedPoint })
		numberOfClicks({ event })
	}

	const birdsList = birds.map(bird => (
		<li key={bird.id}
			onClick={() => handleClickLi(bird)}
			className="options-item">
			{bird.name}
		</li>
	));

	return (
		<ul className="options-list"
			onClick={(event) => handleClickUl(event)}
		>
			{birdsList}
		</ul>
	);
}

export default Options;