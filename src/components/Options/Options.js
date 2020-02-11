import React from 'react';
import './style.scss';
import answer from './../../helpers/answers';

function ClickBird(props) {
	const clickedBird = props.target.textContent;

	if (clickedBird !== answer[0].name) {
		props.target.className += ' error';
	} else {
		props.target.className += ' win';
	}

	return clickedBird;
}

function Options({ birds, onBirdClick }) {
	birds = birds[0];

	const birdsList = birds.map((bird) =>
		<li key={bird.id} onClick={() => onBirdClick(bird)} className="options-item">
			{bird.name}
		</li>
	)

	return (
		<ul className="options-list" onClick={ClickBird}>
			{birdsList}
		</ul>
	)
}

export default Options