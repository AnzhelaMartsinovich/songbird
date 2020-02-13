import React from "react";
import "./style.scss";
import answer from "./../../helpers/answers";


function Options({ birds, onBirdClick, onBirdClickApp, currentQuestionIndex }) {
	function ClickBird(props) {
		const clickedBird = props.target.textContent;

		if (clickedBird !== answer[currentQuestionIndex].name && props.target.tagName === "LI") {
			props.target.className += " error";
		}
		if (clickedBird === answer[currentQuestionIndex].name && props.target.tagName === "LI") {
			props.target.className += " win";
		}

		return clickedBird;
	}

	birds = birds[currentQuestionIndex];

	const handleClick = bird => {
		onBirdClick(bird);
		onBirdClickApp(bird);
	};
	// let bla = currentQuestionIndex - 1;
	// console.log(currentQuestionIndex, bla);

	const birdsList = birds.map(bird => (
		<li
			key={bird.id}
			onClick={() => handleClick(bird)}
			className="options-item"
		>
			{bird.name}
		</li>
	));

	return (
		<ul className="options-list" onClick={ClickBird}>
			{birdsList}
		</ul>
	);
}

export default Options;
