import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../Components/Auth/Login';
import Registration from '../Components/Auth/Registration';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';



const Routes = () => {
    return (
        <BrowserRouter>
                <Route exact path="/registration" component={Registration} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;