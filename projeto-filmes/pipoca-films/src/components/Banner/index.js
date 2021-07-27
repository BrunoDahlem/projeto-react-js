import "./style.css";

const Banner = ({imgBack}) => {
    return (
        <div className="banner-01">
            <img className="img__responsive" src={imgBack} alt="Banner" />
        </div>
    );
}

export default Banner;