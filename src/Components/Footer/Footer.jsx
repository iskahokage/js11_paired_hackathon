import React from 'react';
import './Footer.css'
import logo from '../../Assets/logoShowReel.svg'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div class = "footer-menu"> 
            <div class = "footer-container"> 
                <ul> 
                    <li> <NavLink to='/'> Главная </NavLink></ li> 
                    <li> <NavLink to='/catalog'> Каталог </NavLink></ li> 
                    <li> <NavLink to='/'> Блог </NavLink> </ li> 
                    <li> <NavLink to='/'> Новости </NavLink> </ li> 
                    <li> <NavLink to='/'> Контакты </NavLink></ li> 
                </ ul>    
                <p><img src={logo} alt="logo.jpg" /></p>
            </ div> 
    </ div>
    );
};

export default Footer;