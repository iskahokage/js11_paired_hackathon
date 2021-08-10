import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProductPage from '../Components/Admin/AddProductPage';
import EditProductPage from '../Components/Admin/EditProductPage';
import Cart from '../Components/Cart/Cart';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import ProductList from '../Components/Home/ProductList';
import ProductContextProvider from '../Contexts/ProductContext';
import Login from '../Components/Auth/Login';
import Registration from '../Components/Auth/Registration';



const Routes = () => {
    return (
        <BrowserRouter>
            <ProductContextProvider>
            <Header/>
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/add" component={AddProductPage}/>
                <Route path="/edit" component={EditProductPage}/>
                <Route path="/cart" component={Cart}/>
                <Route exact path="/catalog" component={ProductList}/>
                <Route path="/login" component={Login}/>
                <Route path="/registration" component={Registration}/>
            </Switch>
            </ProductContextProvider>
        </BrowserRouter>
    );
};


export default Routes;