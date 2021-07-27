import Button from "../Button"
import "./style.css";

const Card = ({linkImg,nome,casa,custo,comida}) => {
    return (
        <div className="card">
            <div className="card__imagem">
                <img src={linkImg} alt={nome} className="img__responsive"/>
            </div>
            <div className="card__info">
                <p>Nome da Praia: {nome}</p>
                <p>Casa: {casa}</p>
                <p>Custo para entrar: {custo}</p>
                <p>Comida: {comida}</p>
            </div>
            <Button label="Saiba Mais" id="btn__card" />
        </div>
    );
}

export default Card;