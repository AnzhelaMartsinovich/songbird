import "./style.scss";
import answer from "./../../helpers/answers";

function StyleForClickBird(props) {
	const target = props.event.target
	const clickedBird = target.textContent;

	if (clickedBird !== answer[props.currentQuestionIndex].name && target.tagName === "LI") {
		target.className += " error";
	}
	if (clickedBird === answer[props.currentQuestionIndex].name && target.tagName === "LI") {
		target.className += " win";
	}

	return clickedBird;
}

export default StyleForClickBird;