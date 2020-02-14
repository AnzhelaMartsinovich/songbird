import React from 'react';
import logo from './../../img/logo.png';
import './style.scss';
import Point from './Point';

function Header({ currentIndex }) {
	let itemMenu = currentIndex + 1;

	return (
		<header className="header">
			<h1>Song bird</h1>
			<div className="header-wrap">
				<img src={logo} className="logo" alt="logo" />
				<div>Score: </div>
			</div>
			<ul className="header-list">
				<Point item="1" itemMenu={itemMenu} />
				<Point item="2" itemMenu={itemMenu} />
				<Point item="3" itemMenu={itemMenu} />
				<Point item="4" itemMenu={itemMenu} />
				<Point item="5" itemMenu={itemMenu} />
			</ul>
		</header>
	)
}

export default Header