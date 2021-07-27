import "./style.css";

const Header = ({logo,listaLink}) => {
    return (
    <div className="container-header">
    <div>
        <h1>{logo}</h1>
    </div>
    <ul className="estilo-tabela">
        {
        listaLink.map(({label,id}) => {
            return <li key={id}>{label}</li>
        })
        }
    </ul>
    </div>
)
}
export default Header;