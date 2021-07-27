import Button from "../Button";
import "./style.css";

const Busca = ({nome}) => {
    return(
        <div className="container__busca">
            <input name={nome} placeholder={nome} id="buscar" />
            <Button label="Buscar" id="btn__busca"/>
        </div>
    );
}

export default Busca;