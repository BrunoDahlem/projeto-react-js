import "./style.css";

const Header = ({links, logo, logoTitle}) => {
    
    return(
        <header className="header">
            <div className="logo">
                <a href='/'><img src={logo} alt={logoTitle} className="img__responsive" /></a>
            </div>
            <nav className="menu">
                <ul className="menu__lista">
                {
                    links.map(({id, label, link}) => {
                        return <li className={label === "Login" ? "btn__login menu__lista__item" : "menu__lista__item" } key={id}><a href={link}>{label}</a></li>
                    })
                }
                </ul>
            </nav>
        </header>
    );
}

export default Header;