import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import ProductList from '../Components/Home/ProductList';
import ProductContextProvider from '../Contexts/ProductContext';



const Routes = () => {
    return (
        <BrowserRouter>
            <ProductContextProvider>
            <Header/>
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/catalog" component={ProductList}/>
            </Switch>
            </ProductContextProvider>
        </BrowserRouter>
    );
};


export default Routes;