import React from 'react';

const Header = () => {
    return (
        <header>
		<div class="headerWrapper">
			<h1>VELOSTORE</h1>
			<button class="burger" id="burger">
				<div class="bar"></div>
				<div class="bar"></div>
			</button>
			<div class="topLinks">
				<ul>
					<li><a href="">Главная</a></li>
					<li><a href="">О магазине</a></li>
					<li><a href="">Контакты</a></li>
					<li><a href="">Доставка</a></li>
					<li><a href="">Гаратия</a></li>
				</ul>
			</div>
		</div>
	</header>
    );
};

export default Header;