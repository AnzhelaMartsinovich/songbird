import React, { useState } from "react";
import Options from "./Options/Options";
import Descr from "./Descr/Descr";
import birds from "./../helpers/birds";

function Wrapper({ onBirdClickApp }) {
	const [selectedBird, setSelectedBird] = useState(null);
	const changeSelectedBird = bird => setSelectedBird(bird.name);

	return (
		<div className="wrapper">
			<Options
				birds={birds}
				onBirdClick={changeSelectedBird}
				onBirdClickApp={onBirdClickApp}
			/>
			<Descr birds={birds} selectedBird={selectedBird} />
		</div>
	);
}

export default Wrapper;
