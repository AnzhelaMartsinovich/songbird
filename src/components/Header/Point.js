import React from 'react';

function Point(props) {
	return (
		<li
			className="header-item"
			style={{
				backgroundColor: Number(props.item) === props.itemMenu ? '#b7cab0' : '',
			}}
		>
			<a href="/#"
				style={{
					color: Number(props.item) === props.itemMenu ? '#000000' : '',
				}}
			>
				{props.item}-й вопрос
			</a>
		</li>
	)
}

export default Point;