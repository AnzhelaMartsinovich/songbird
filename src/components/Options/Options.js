import React from "react";
import "./style.scss";
import setStyleForClickBird from './setStyleForClickBird';

function Options({ birds, onBirdClick, currentQuestionIndex, checkTrueAnswer, goal }) {
	birds = birds[currentQuestionIndex];

	const handleClick = (bird) => {
		onBirdClick(bird);
	};


	const handleClick2 = (event) => {
		checkTrueAnswer({ event, goal });
		setStyleForClickBird({ currentQuestionIndex, event, goal })
	}


	const birdsList = birds.map(bird => (
		<li key={bird.id}
			onClick={() => handleClick(bird)}
			className="options-item">
			{bird.name}
		</li>
	));

	return (
		<ul className="options-list"
			onClick={(event) => handleClick2(event)}
		>
			{birdsList}
		</ul>
	);
}

export default Options;

// const [countAnswersClick, setCount] = useState(1);

		// console.log(clickedBird === answer[props.currentQuestionIndex].name);

		// if (countAnswersClick === 2) {
		// 	setCount(countAnswersClick + 1)
		// } else {
		// 	setCount(countAnswersClick + 1)
		// }