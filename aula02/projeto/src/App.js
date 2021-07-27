import './App.css';
import Busca from './components/Busca';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import Logo from './img/logo.png';
import Praias from './json/praias.json'; 
import Menus from './json/menus.json'

function App() {
  return (
    <div className="App">
      <Header logoTitle="Empresa" logo={Logo} links={Menus} />
      <main className="main">
        <Busca nome="Buscar Local"/>
        <div className="listaCards">
          {
            Praias.map(({id,linkImg,nome,casa,custo,comida}) =>{
              return( 
                <div className="pre__card" key={id}>
                  <Card  nome={nome} casa={casa} comida={comida} linkImg={linkImg} custo={custo}/>
                </div>
              )
            })
          }
        </div>
      </main>
      
      < Footer logo={Logo} logoTitle="Empresa" classFooter={Praias.length >= 3 ? 'footerAbs': 'footer'} />
    </div>
  );
}

export default App;
