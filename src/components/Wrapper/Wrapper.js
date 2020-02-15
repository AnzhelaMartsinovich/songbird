import React, { useState } from "react";
import Options from "../Options/Options";
import Descr from "../Descr/Descr";
import birds from "../../helpers/birds";

function Wrapper({ currentQuestion, checkTrueAnswer, goal, numberOfClicks }) {
	const [selectedBird, setSelectedBird] = useState(null);
	const changeSelectedBird = bird => setSelectedBird(bird.name);

	return (
		<div className="wrapper">
			<Options
				birds={birds}
				onBirdClick={changeSelectedBird}
				currentQuestionIndex={currentQuestion}
				checkTrueAnswer={checkTrueAnswer}
				goal={goal}
				numberOfClicks={numberOfClicks}
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
