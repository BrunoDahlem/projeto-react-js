import './App.css';
import Busca from './components/Busca';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import Logo from './img/logo.png';
import Menus from './json/menus.json';
import Button from './components/Button';
import Banner from './components/Banner';
import BannerImg from './img/banner-02.jpg';
import { useEffect, useState } from 'react';


function App() {
  const cards = document.querySelectorAll('.card');
  const [listaFilmes, setListaFilmes] = useState([]);
  const [detalheFilmes, setDetalheFilmes] = useState({});
  const url = 'http://www.omdbapi.com/';
  const apiKey = '&apikey=ba1ecb32';
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  const sizeOfThings = () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    
    // let screenWidth = screen.width;
    // let screenHeight = screen.height;

    console.log('windowWidth',windowWidth);
    console.log('windowHeight',windowHeight);
    // console.log('screenWidth',screenWidth);
    // console.log('screenHeight',screenHeight);
  }

  useEffect(() => {
    sizeOfThings()
  },[windowWidth])


  const handleClick = () => {
    fetch(`${url}?s=hulk${apiKey}`,{
      method:"GET",
    }).then((response)=> response.json())
    .then((listaFilmes)=>{
      console.log(listaFilmes.Search);
      setListaFilmes(listaFilmes.Search);
    })
  }
  // useEffect(()=>{
  //   fetch(`${url}${apiKey}s=hulk`,{
  //     method:"GET"
  //   }).then((response)=> response.json())
  //   .then((listaFilmes)=>{
  //     console.log(listaFilmes);
  //     setListaFilmes(listaFilmes);
  //   })
  // },[listaFilmes])


  return (
    <div className="App">
      < Header logo={Logo} logoTitle="Pipoca Filmes" links={Menus}/>
      < Banner imgBack={BannerImg}/>
      < Busca nome="busca" id="busca" />
      < Button nome="filmes" id="mostraFilmes" script={handleClick} label="Mostra Filmes" />
      <div className="listaCards">
          {
            listaFilmes.map(({imdbID,Title,Poster,Type,Year}) =>{
              return( 
                <div className="pre__card" key={imdbID}>
                  <Card  Title={Title} Poster={Poster} Type={Type} Year={Year}/>
                </div>
              )
            })
          }
        </div>
      < Footer links={Menus} logo={Logo} logoTitle="Piopoca Filmes" classFooter={cards.length <= 1 ? 'footerAbs': 'footer'}/>
    </div>
  );
}

export default App;
