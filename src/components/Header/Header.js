import React from 'react';
import logo from './../../img/logo.png';
import './style.scss'

function Header() {
	return (
		<header className="header">
			<h1>Song bird</h1>
			<div className="header-wrap">
				<img src={logo} className="logo" alt="logo" />
				<div>Score: </div>
			</div>
			<ul className="header-list">
				<li className="header-item">
					<a href="#">Разминка</a>
				</li>
				<li className="header-item">
					<a href="#">Воробьиные</a>
				</li>
				<li className="header-item">
					<a href="#">Лесные птицы</a>
				</li>
				<li className="header-item">
					<a href="#">Певчие птицы</a>
				</li>
				<li className="header-item">
					<a href="#">Хищные птицы</a>
				</li>
				<li className="header-item">
					<a href="#">Морские птицы</a>
				</li>
			</ul>
		</header>
	)
}

export default Header