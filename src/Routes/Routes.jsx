import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddProduct from '../Components/Admin/AddProduct';
import EditProduct from '../Components/Admin/EditProduct';
import AdminProvider from '../Contexts/AdminContext';
import AdminPage from '../Components/Admin/AdminPage';
import Home from '../Components/Home/Home'

const Routes = () => {
    return (
        <div>
            <BrowserRouter>
                <AdminProvider>
                    <Switch>
                        <Route exact path = "/edit" component={EditProduct} />
                        <Route exact path = "/add" component={AddProduct} />
                        <Route exact path = "/admin" component={AdminPage} />
                        <Route exact path = "/" component={Home} />
                    </Switch>
                </AdminProvider>
            </BrowserRouter>
        </div>
    );
};


export default Routes;