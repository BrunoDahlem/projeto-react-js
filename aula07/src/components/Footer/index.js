import React, { useContext } from 'react';
import { Container,Container__links,Container__img,Links} from './styled';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from '../../context/NameContext';

const Footer = ({logo,alt,links}) => {
    const {nomeFilme,footer} = useContext(GlobalContext);

    return (
    <Container abs={footer}>
        <Container__img>
            <NavLink exact to="/"><img src={logo} alt={alt}/></NavLink>
        </Container__img>
        <div>
            {nomeFilme}
        </div>
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

export default Footer;