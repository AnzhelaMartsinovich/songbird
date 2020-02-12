import React, { useState } from "react";
import Options from "./Options/Options";
import Descr from "./Descr/Descr";
import birds from "./../helpers/birds";

function Wrapper({ onBirdClickApp, currentQuestion }) {
	const [selectedBird, setSelectedBird] = useState(null);
	const changeSelectedBird = bird => setSelectedBird(bird.name);

	return (
		<div className="wrapper">
			<Options
				birds={birds}
				onBirdClick={changeSelectedBird}
				onBirdClickApp={onBirdClickApp}
				currentQuestionIndex={currentQuestion}
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
