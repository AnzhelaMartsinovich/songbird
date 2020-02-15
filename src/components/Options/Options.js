import React from "react";
import "./style.scss";
import setStyleForClickBird from './setStyleForClickBird';

function Options({ birds, onBirdClick, currentQuestionIndex, checkTrueAnswer, goal, numberOfClicks }) {
	birds = birds[currentQuestionIndex];

	const handleClickLi = (bird) => {
		onBirdClick(bird);
	};

	const handleClickUl = (event) => {
		checkTrueAnswer({ event, goal });
		setStyleForClickBird({ currentQuestionIndex, event, goal })
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

// const [countAnswersClick, setCount] = useState(1);

		// console.log(clickedBird === answer[props.currentQuestionIndex].name);

		// if (countAnswersClick === 2) {
		// 	setCount(countAnswersClick + 1)
		// } else {
		// 	setCount(countAnswersClick + 1)
		// }