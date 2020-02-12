import React from "react";
import "./style.scss";
import bird from "./../../img/bird.jpg";
import answer from "./../../helpers/answers";

function Question({ selectedBirdFromApp, currentQuestion }) {
	return (
		<div className="question">
			<img
				src={
					selectedBirdFromApp.name === answer[currentQuestion].name
						? selectedBirdFromApp.image
						: bird
				}
				alt="bird"
				className="question-bird"
			/>
			<div className="question-right">
				<h3 className="question-title">
					{selectedBirdFromApp.name === answer[currentQuestion].name
						? selectedBirdFromApp.name
						: "******"}
				</h3>

				<audio
					controls="controls"
					src={answer[currentQuestion].audio}
					className="question__audio"
				/>
			</div>
		</div>
	);
}

export default Question;
