import Button from "../Button"
import "./style.css";

const Card = ({Title,Poster,Type,Year}) => {
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
            <Button label="Saiba Mais" id="btn__card" />
        </div>
    );
}

export default Card;