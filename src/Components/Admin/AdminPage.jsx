import { React, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AddProduct from './AddProduct';
import { addProductContext } from '../../Contexts/AdminContext';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';



const AdminPage = () => {
    const { products, getProductsData, deleteProduct, editProduct } = useContext(addProductContext)
    useEffect(() => {
        getProductsData()
    }, [])
    // 
    function handleClick(id) {
        deleteProduct(id)
    }

    return (
        <div>
            <AddProduct />
            <h1>There should be a list of products</h1>
            
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>#</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell align="right">Brand</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Photo</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map(product => (
                            <TableRow>
                                <TableCell align="right"><button onClick={() => handleClick(item.id)}>Delete</button></TableCell>
                                <NavLink to="/edit"><TableCell align="right"><button onClick={() => editProduct(item.id)}>Edit</button></TableCell></NavLink>
                                <TableCell component="th" scope="row">{product.title}</TableCell>
                                <TableCell align="right">{product.brand} </TableCell>
                                <TableCell align="right">{product.description} </TableCell>
                                <TableCell align="right">{product.category}</TableCell>
                                <TableCell align="right">{product.price}</TableCell>
                                <TableCell align="right"><img width={100} src={product.image} /></TableCell>
                            </TableRow>
                        ))}s
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default AdminPage;