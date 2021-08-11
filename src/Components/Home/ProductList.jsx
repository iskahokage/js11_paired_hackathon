import React, { useContext, useEffect } from 'react';
import { addProductContext } from '../../Contexts/ProductContext';
import './ProductList.css';
import {Paper} from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import ProductCard from './ProductCard';

const useStyles = makeStyles(() => ({
    
    title:{
        textAlign: "center"
    },
    paper:{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "10px",
    }
  }));


const ProductList = () => {
    const {products, getProducts, deleteProduct, editProduct} = useContext(addProductContext)
    const classes = useStyles();
    useEffect(()=>{
        getProducts()
      }, [])
      function handleClick(id){
        deleteProduct(id)
      }
   
    return (
        <>
            <h1 className={classes.title}>Каталог Байков</h1>
            <Paper className={classes.paper}>
                <ProductCard/>
            </Paper>
        </>
    );
};

export default ProductList;