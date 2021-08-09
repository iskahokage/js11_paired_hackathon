import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EditProduct from '../Components/Admin/EditProduct';
import AddProductContextProvoder from '../Contexts/AdminContext';
import AdminPage from '../Components/Admin/AdminPage';
import Home from '../Components/Home/Home'

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <AddProductContextProvoder>
                    <Switch>
                        <Route exact path = "/edit" component={EditProduct} />
                        <Route exact path = "/admin" component={AdminPage} />
                        <Route exact path = "/" component={Home} />
                    </Switch>
                </AddProductContextProvoder>
            </BrowserRouter>
        </div>
    );
};


export default Routes;