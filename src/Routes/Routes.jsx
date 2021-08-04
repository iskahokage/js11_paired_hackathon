import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;