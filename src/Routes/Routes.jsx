import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProductPage from '../Components/Admin/AddProductPage';
import EditProductPage from '../Components/Admin/EditProductPage';
import Cart from '../Components/Cart/Cart';
import Home from '../Components/Home/Home';
import ProductList from '../Components/Home/ProductList';
import ProductContextProvider from '../Contexts/ProductContext';
import Authorization from '../Components/Auth/Login';
import Registration from '../Components/Auth/Registration';
import AuthContextProvider from '../Contexts/AuthContext';
import Profile from '../Components/Profile/Profile';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';


const Routes = () => {
    return (
        <BrowserRouter>
            <ProductContextProvider>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/add" component={AddProductPage} />
                    <Route path="/edit" component={EditProductPage} />
                    <Route path="/cart" component={Cart} />
                    <Route exact path="/catalog" component={ProductList} />

                </Switch>
            </ProductContextProvider>
            <AuthContextProvider>
                <Switch>
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/auth" component={Authorization} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>

            </AuthContextProvider>

        </BrowserRouter>
    );
};


export default Routes;