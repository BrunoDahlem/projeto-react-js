import "./style.css";

const Button = ({label,id,script}) => {
    return <button className="btn" onClick={() => script()} id={id}>{label}</button>
}

export default Button;