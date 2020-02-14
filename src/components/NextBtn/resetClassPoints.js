function resetClassPoints() {
	let li = document.querySelectorAll('li.options-item');
	li.forEach(element => {
		element.className = 'options-item';
	});
}

export default resetClassPoints;