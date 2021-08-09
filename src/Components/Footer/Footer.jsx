import React from 'react';
import './Footer.css'
import logo from '../../Assets/logoShowReel.svg'

const Footer = () => {
    return (
        <div class = "footer-menu"> 
            <div class = "footer-container"> 
                <ul> 
                    <li> <a href="index.html"> Главная </a> </ li> 
                    <li> <a href = "receies.html"> Рецепты </a> </ li> 
                    <li> <a href="404.html"> Блог </a> </ li> 
                    <li> <a href = "gallery.html "> Галерея </a> </ li> 
                    <li> <a href="contact.html"> Контакты </a> </ li> 
                </ ul>    
                <p><img src={logo} alt="logo.jpg" /></p>
            </ div> 
    </ div>
    );
};

export default Footer;