import React from 'react';
import './style.scss';

function ClickBird(props) {
	const clickedBird = props.target.textContent;
	return clickedBird;
}

function Options({ birds, onBirdClick }) {
	// const birdsList = birds.map((birdsArr) =>
	// 	birdsArr.map((bird) =>
	// 		<li key={bird.id} className="options-item">
	// 			{bird.name}
	// 		</li>
	// 	)
	// )

	// return (
	// 	<ul className="options-list" onClick={ClickBird}>
	// 		{birdsList}
	// 	</ul>
	// )

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