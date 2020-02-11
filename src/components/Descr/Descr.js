import React from 'react';
import './style.scss';

function Descr({ birds, selectedBird }) {
	birds = birds[0];

	let allInformation = birds.find(bird => bird.name === selectedBird);

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

					<audio controls="controls" src={allInformation === undefined ? '' : allInformation.audio} className="descr__audio" style={{ display: allInformation === undefined ? 'none' : 'block' }} />
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