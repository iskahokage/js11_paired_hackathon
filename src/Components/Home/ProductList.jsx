import React, { useContext, useEffect } from 'react';
import { addProductContext } from '../../Contexts/ProductContext';
import './ProductList.css';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import ProductCard from './ProductCard';
import Header from '../Header/Header'
import { Paper } from '@material-ui/core';


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
            <Header />
            <h1 className={classes.title}>Каталог Байков</h1>
            <Paper className={classes.paper}>
                <ProductCard/>
            </Paper>
        </>
    );
};

export default ProductList;