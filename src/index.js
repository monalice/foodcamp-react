import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Header from './components/Header';
import Pokemons from './components/Pokemons';
import Pokemon from './components/Pokemon';

var root = document.querySelector("#root");

function App() {

    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact={true} component={Pokemons} />
                <Route path="/pokemon/:id" exact={true} component={Pokemon} />
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, root);