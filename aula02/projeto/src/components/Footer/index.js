import "./style.css";

const Footer = ({logo,logoTitle,classFooter}) => {
    
    return (
        <footer id="footer" className={classFooter} >
            <div className="logo">
                <img src={logo} alt={logoTitle} className="img__responsive"/>
            </div>
            <div className="desenvolvido">
                <b>Desenvolvido por <a href="https://github.com/BrunoDahlem/" traget="_blank">Bruno Dahlem</a></b>
            </div>
        </footer>
    )
}


export default Footer;