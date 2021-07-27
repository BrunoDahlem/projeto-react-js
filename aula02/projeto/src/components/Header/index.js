import "./style.css";

const Header = ({links, logo, logoTitle}) => {
    return(
        <header className="header">
            <div className="logo">
                <img src={logo} alt={logoTitle} className="img__responsive"/>
            </div>
            <nav className="menu">
                <ul className="menu__lista">
                {
                    links.map(({id, label, link}) => {
                        return <li className="menu__lista__item" key={id}><a href={link}>{label}</a></li>
                    })
                }
                </ul>
            </nav>
        </header>
    );
}

export default Header;