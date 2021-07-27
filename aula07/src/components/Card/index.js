import React from 'react';
import {Container,BtnMais,ContainerCard,ContainerImg,ContainerInfo,LinkMais} from './styled';
import Dvd from '../../assets/dvd-n-a.jpg'

const Card = ({data}) => {
    const {imdbID,Title,Poster,Type,Year}= data;
    return (
        <Container>
            <ContainerCard>
                <h1>{Title}</h1>
                <ContainerImg>
                    <img src={Poster != 'N/A' ? Poster : Dvd } alt={Title}/>
                </ContainerImg>
                <ContainerInfo>
                    <p><strong>Tipo:</strong> {Type}</p>
                    <p><strong>Ano:</strong> {Year}</p>
                </ContainerInfo>
                <BtnMais>
                    <LinkMais to={`/filmes/${imdbID}`}>Saiba Mais</LinkMais>
                </BtnMais>
            </ContainerCard>
        </Container>
    );
}

export default Card;