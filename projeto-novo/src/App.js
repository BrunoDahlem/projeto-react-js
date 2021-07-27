import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menus from "./json/menus.json";
import Logo from "./img/logo.png";

function App() {
  return (
    <Router>
      <Header logoTitle="Pipoca Filmes" logo={Logo} links={Menus}/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/top-filmes">

        </Route>
        <Route path="/filmes">
          
        </Route>
        <Route path="/login">
          
        </Route>
      </Switch>
      < Footer links={Menus} logo={Logo} logoTitle="Piopoca Filmes" classFooter='footerAbs'/>
    </Router>
  );
}

export default App;
