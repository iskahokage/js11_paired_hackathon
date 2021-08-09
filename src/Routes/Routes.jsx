import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProductPage from '../Components/Admin/AddProductPage';
import EditProductPage from '../Components/Admin/EditProductPage';
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
                <Route path="/add" component={AddProductPage}/>
                <Route path="/edit" component={EditProductPage}/>
                <Route exact path="/catalog" component={ProductList}/>
            </Switch>
            </ProductContextProvider>
        </BrowserRouter>
    );
};


export default Routes;