import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    background: #333;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 5px 20px;
    font-weight: bold;
    @media (max-width:991px){
        flex-direction: column;
    }
`;
export const Container__img = styled.div`
    width: 250px;
`;

export const Container__links = styled.nav`
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    @media (max-width:991px) {
        width: 80%;
    }
    .active:after {
        background: red;
        width: 70%;
    }
    .linkLogin {
        background: crimson;
        transition: transform .5s;
    }
    .linkLogin:hover:after {
        background: #333;
        width: 70%;
    }
    .linkLogin.active:after {
        background: #333;
        width: 70%;
    }
    .linkLogin:hover {
        transform: scale(1.05);
    }
`;

export const Links = styled(NavLink)`
    cursor: pointer;
    transition: box-shadow .5s, border .5s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-top: 7px;
    padding: 5px 10px 0 10px;
    border-radius: 10px;
    border: 2px solid transparent;
    transition: .5s;
    :after {
        content: "";
        margin: 5px 0 0 0;
        background: transparent;
        height: 2px;
        width: 0;
        transition: .5s;
    }
    :hover:after {
        background: red;
        width: 70%;
    }
`;