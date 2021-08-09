import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditProductPage from '../Components/Admin/EditProductPage';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import ProductContextProvider from '../Contexts/ProductContext';

const Routes = () => {
    return (
        <ProductContextProvider>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/edit" component={EditProductPage}/>
                </Switch>
            </BrowserRouter>
        </ProductContextProvider>
    );
};

export default Routes;