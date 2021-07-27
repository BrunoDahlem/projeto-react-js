import React from 'react';
import { Container,Container1, Container2, DetailButton,ContainerImg } from './styled';
import { NavLink } from 'react-router-dom';

const CardDetail = ({data}) => {
    const {Title,Poster,Runtime,Released,Plot,Genre,Director,Actors,Production,Language,imdbRating} = data;
    return (
        <Container>
            <Container1>
                <ContainerImg>
                    <img src={Poster} alt={Title}/>
                </ContainerImg>
            </Container1>
            <Container2>
                <h1>{Title}</h1>
                <p><strong>Descrição: </strong> {Plot}</p>
                <p><strong>Ano de lançamento: </strong>{Released}</p>
                <p><strong>Genero: </strong>{Genre}</p>
                <p><strong>Diretor: </strong>{Director}</p>
                <p><strong>Atores: </strong>{Actors}</p>
                <p><strong>Produtora: </strong>{Production}</p>
            </Container2>
            <Container2>
                <p><strong>Nota: </strong>{imdbRating}</p>
                <p><strong>Dublagens: </strong>{Language}</p>
                <p><strong>Tempo: </strong>{Runtime}</p>
            </Container2>
            <DetailButton><NavLink to="/">Voltar</NavLink></DetailButton>
        </Container>
    );
}

export default CardDetail;