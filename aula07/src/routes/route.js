import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Filmes from '../page/Filmes';
import Logo from '../assets/logo.png'
import Header from '../components/Header';
import Menus from '../mocks/menus.json'
import TopMovies from '../page/TopMovies';
import Sobre from '../page/Sobre';
import Login from '../page/Login';
import FilmesDetalhe from '../page/FilmesDetalhe';
import Footer from '../components/Footer'

const Routes = () => {

    const[footer,setFooter] = useState(true);

    return (
        <Router>
            <Header links={Menus} logo={Logo} alt="Pipoca filmes"/>
            <Switch>
                <Route exact path="/">
                    <Filmes setFooter={setFooter}/>
                </Route>
                <Route exact path="/top-filmes">
                    <TopMovies setFooter={setFooter}/>
                </Route>
                <Route exact path="/sobre">
                    <Sobre setFooter={setFooter}/>
                </Route>
                <Route exact path="/login">
                    <Login setFooter={setFooter}/>
                </Route>
                <Route exact path="/filmes/:id">
                    <FilmesDetalhe setFooter={setFooter}/>
                </Route>
            </Switch>
            <Footer links={Menus} logo={Logo} alt="Pipoca filmes" abs={footer}/>
        </Router>
    );
}

export default Routes;