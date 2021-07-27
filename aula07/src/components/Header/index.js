import React from 'react';
import { Container,Container__links,Container__img,Links} from './styled';
import { NavLink } from 'react-router-dom';


const Header = ({logo,alt,links}) => {
    return (
        <Container>
            <Container__img>
                <NavLink exact to="/"><img src={logo} alt={alt}/></NavLink>
            </Container__img>
            <Container__links>
                {
                    links.map(({index, label, link}) => {
                        return (
                        <Links key={index} className={label === "Login" ? "linkLogin" : "" } exact to={link}>{label}</Links>
                    )})
                }
            </Container__links>
        </Container>
);
}

export default Header;