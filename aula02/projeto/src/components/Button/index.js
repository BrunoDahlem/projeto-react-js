import "./style.css";

const Button = ({label,id}) => {
    return <button className="btn" id={id}>{label}</button>
}

export default Button;