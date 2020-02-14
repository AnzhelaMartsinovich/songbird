import React, { useState } from "react";
import Options from "../Options/Options";
import Descr from "../Descr/Descr";
import birds from "../../helpers/birds";

function Wrapper({ onBirdClickApp, currentQuestion, checkTrueAnswer, goal }) {
	const [selectedBird, setSelectedBird] = useState(null);
	const changeSelectedBird = bird => setSelectedBird(bird.name);
	//
	// let [goal, setGoal] = useState(false);

	// function getCountAnswersClick(props) {
	// 	const target = props.event.target;
	// 	const clickedBird = target.textContent;

	// 	if (clickedBird === answer[currentQuestion].name) {
	// 		setGoal(true);
	// 	}
	// 	console.log(props.goal);
	// 	goal = props.goal;
	// 	return goal;
	// }
	// console.log(goal, answer[currentQuestion].name);
	//
	return (
		<div className="wrapper">
			<Options
				birds={birds}
				onBirdClick={changeSelectedBird}
				currentQuestionIndex={currentQuestion}
				checkTrueAnswer={checkTrueAnswer}
				goal={goal}
			/>
			<Descr
				birds={birds}
				selectedBird={selectedBird}
				currentQuestionIndex={currentQuestion}
			/>
		</div>
	);
}

export default Wrapper;
