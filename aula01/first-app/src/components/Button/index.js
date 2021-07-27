import "./style.css";

const Button = ({label,cor}) => {
return (
    <div className="container-botao">
    <button className={cor === "azul" ? "botao-custom-azul" : "botao-custom-vermelho"}>{label}</button>
    </div>
)
}

export default Button;