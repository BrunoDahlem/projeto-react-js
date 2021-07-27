import React from 'react';
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
    return (
        <Router>
            <Header links={Menus} logo={Logo} alt="Pipoca filmes"/>
            <Switch>
                <Route exact path="/">
                    <Filmes/>
                </Route>
                <Route exact path="/top-filmes">
                    <TopMovies/>
                </Route>
                <Route exact path="/sobre">
                    <Sobre/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/filmes/:id">
                    <FilmesDetalhe/>
                </Route>
            </Switch>
            <Footer links={Menus} logo={Logo} alt="Pipoca filmes"/>
        </Router>
    );
}

export default Routes;