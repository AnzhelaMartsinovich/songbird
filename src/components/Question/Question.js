import React from 'react';
import './style.scss';
import bird from './../../img/bird.jpg';
import answer from './../../helpers/answers'

function Question({ selectedBirdFromApp }) {

	return (
		<div className="question">
			<img src={bird} alt="bird" className="question-bird" />
			<div className="question-right">
				<h3 className="question-title">
					{(selectedBirdFromApp.name === answer[0].name ? selectedBirdFromApp.name : '******')}
					{/* Какая птица издает звуки? */}
				</h3>

				<audio controls="controls" src="https://24navo.com/lessons/html_list/i/m/4z.mp3" className="question__audio" />

			</div>
		</div>
	)
}

export default Question