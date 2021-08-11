import React, { useContext, useEffect } from 'react';
import { addProductContext } from '../../Contexts/ProductContext';
import './ProductList.css';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import ProductCard from './ProductCard';
import Header from '../Header/Header'


const useStyles = makeStyles(() => ({
    buyBtn:{
        backgroundColor: "white",
        border: "solid #0D6EFD 2px",
        '&:hover': {
            backgroundColor: "#0D6EFD",
            color: "white"
        },
    },
    addToCartBtn:{
        backgroundColor: "white",
        border: "solid #FF2800 2px",
        '&:hover': {
            backgroundColor: "#FF2800",
            color: "white"
        },
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
            <ProductCard/>
        </>
    );
};

export default ProductList;