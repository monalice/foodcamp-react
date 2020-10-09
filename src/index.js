import App from './components/App';
import Review from './components/Review';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

var root = document.querySelector("#root");

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact={true}>
                <App />
            </Route>
            <Route path="/review" exact={true}>
                <Review />
            </Route>
        </Switch>
    </Router>, root);