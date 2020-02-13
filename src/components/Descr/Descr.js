import React from 'react';
import './style.scss';
import AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import './../../commonStyles/audio.scss';

function Descr({ birds, selectedBird, currentQuestionIndex }) {
	birds = birds[currentQuestionIndex];

	let allInformation = birds.find(bird => bird.name === selectedBird);

	const Player = () => (
		<AudioPlayer
			src={allInformation === undefined ? '' : allInformation.audio} 
			style={{ display: allInformation === undefined ? 'none' : 'flex' }}
			className="descr-audio"
		/>
	);

	return (
		<div className="descr">
			<div className="flex-wrap">
				<div className="descr-titles">
					<h3 className="descr-title">
						{selectedBird === null ? 'Правила викторины:' : selectedBird}
					</h3>

					<h5 className="descr-subtitle">
						{allInformation === undefined ? '' : allInformation.species}
					</h5>

					<Player />
				</div>

				<img className="descr__bird-img" src={allInformation === undefined ? '' : allInformation.image} alt="bird" style={{ display: allInformation === undefined ? 'none' : 'block' }} />
			</div>

			<p className="descr-text" style={{ width: allInformation === undefined ? '70%' : '100%', marginTop: allInformation === undefined ? '0' : '20px' }}>
				{allInformation === undefined ? 'Сначала послушайте пение птицы, используя плеер, а затем выберите один из вариантов' : allInformation.description}
			</p>

		</div>
	)
}

export default Descr