import styled from 'styled-components';
import Button from '../../components/Button';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    @media (max-width:991px){
        width: 100%;
    }
`;

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 520px;
    justify-content: space-evenly;
    width: 90%;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 5px 5px 16px #000;
    border: 2px solid #000;
    transition: box-shadow .5s, transform .5s;
    background: #fff;
    :hover {
        transform: scale(1.05);
        box-shadow: 16px 20px 20px #000;
    }
    h1 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        text-align: center;
    }
`;

export const ContainerImg = styled.div`
    height: 60%;
    width: 100%;
    border: 2px solid #000;
    border-radius: 10px;
`;

export const ContainerInfo = styled.div`
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: space-around;
`;

export const BtnMais = styled(Button)`
    background: crimson;
    color: #fff;
    height: 40px;
    width: 50%;
    border: 2px solid #333;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px;
`;
export const LinkMais = styled(NavLink)`
    color: #fff;
    
`;