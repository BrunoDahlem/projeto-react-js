import React from 'react';
import Button from "../Form/Button"
import "./style.css";

const Card = ({imdbID,Title,Poster,Type,Year}) => {
    return (
        <div className="card">
            <div className="card__imagem">
                <img src={Poster} alt={Title} className="img__responsive"/>
            </div>
            <div className="card__info">
                <h3>{Title}</h3>
                <p>Tipo: {Type}</p>
                <p>Ano: {Year}</p>
            </div>
            <Button id={imdbID} onClick={(event)=>{
               console.log(event.target.id) 
            }}>Saiba Mais</Button>
        </div>
    );
}

export default Card;