import React from 'react';
import './Header.css'
import logo from '../../Assets/logo.png'
// import { IoMdCart, FaSearchengin } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
		<div class="headerWrapper">
            <div><img className="logo" src={logo} alt="" /></div>
			{/* <button class="burger" id="burger">
				<div class="bar"></div>
				<div class="bar"></div>
			</button> */}
			<input placeholder="Введите что-нибудь для поиска"></input>
			<div class="topLinks">
				<ul>
					{/* <li><FaSearchengin /></li> */}
					<li><a href="">Каталог</a></li>
					<li><a href="">Поиск</a></li>
					<li><a href="">Личный Кабинет</a></li>
					<li><a href="">Войти</a></li>
					<li><a href="">Регистрация</a></li>
					{/* <li><a href="">Hi<IoMdCart /></a></li> */}
					
				</ul>
			</div>
		</div>
	</header>
    );
};

export default Header;