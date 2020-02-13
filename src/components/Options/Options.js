import React from "react";
import "./style.scss";
import StyleForClickBird from './StyleForClickBird';

function Options({ birds, onBirdClick, onBirdClickApp, currentQuestionIndex }) {

	birds = birds[currentQuestionIndex];

	const handleClick = (bird) => {
		onBirdClick(bird);
		onBirdClickApp(bird);
	};

	const birdsList = birds.map(bird => (
		<li key={bird.id} onClick={() => handleClick(bird)} className="options-item">
			{bird.name}
		</li>
	));

	return (
		<ul className="options-list"
			onClick={(event) => { StyleForClickBird({ currentQuestionIndex, event }) }}
		>
			{birdsList}
		</ul>
	);
}

export default Options;
