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
<<<<<<< HEAD
=======
import Footer from '../Components/Footer/Footer';
>>>>>>> ce15c20ae7b23bf5d7713a05fe036d6f56e887a8


const Routes = () => {
    return (
        <AuthContextProvider>
            <ProductContextProvider>
<<<<<<< HEAD
        <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/add" component={AddProductPage}/>
                    <Route path="/edit" component={EditProductPage}/>
                    <Route path="/cart" component={Cart}/>
                    <Route exact path="/catalog" component={ProductList}/>           
                    <Route exact path="/registration" component={Registration} />
                    <Route exact path="/auth" component={Authorization} />
                    <Route exact path="/profile" component={Profile} />
                </Switch>
=======
                <AuthContextProvider>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/add" component={AddProductPage}/>
                        <Route path="/edit" component={EditProductPage}/>
                        <Route path="/cart" component={Cart}/>
                        <Route exact path="/catalog" component={ProductList}/>           
                        <Route exact path="/registration" component={Registration} />
                        <Route exact path="/auth" component={Authorization} />
                        <Route exact path="/profile" component={Profile} />
                    </Switch>
                    <Footer/>
                </AuthContextProvider>
            </ProductContextProvider>
>>>>>>> ce15c20ae7b23bf5d7713a05fe036d6f56e887a8
        </BrowserRouter>
            </ProductContextProvider>
                </AuthContextProvider>
    );
};


export default Routes;