import React from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';

const Header = ({links, logo, logoTitle}) => {
    
    return(
        <header className="header">
            <div className="logo">
                <NavLink exact to='/'><img src={logo} alt={logoTitle} className="img__responsive" /></NavLink>
            </div>
            <nav className="menu">
                {
                    links.map(({id, label, link}) => {
                        return <NavLink className={label === "Login" ? "btn__login menu__lista__item" : "menu__lista__item" } key={id} exact to={link}>{label}</NavLink>
                    })
                }
            </nav>
        </header>
    );
}

export default Header;