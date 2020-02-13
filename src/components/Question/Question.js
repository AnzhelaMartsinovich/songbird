import React from "react";
import "./style.scss";
import bird from "./../../img/bird.jpg";
import answer from "./../../helpers/answers";
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import './../../commonStyles/audio.scss';


function Question({ selectedBirdFromApp, currentQuestion }) {
	const Player = () => (
		<AudioPlayer
			src={answer[currentQuestion].audio}
		/>
	);

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
				<Player />
			</div>
		</div>
	);
}

export default Question;
