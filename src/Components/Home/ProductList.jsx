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
        <ProductCard/>
    );
};

export default ProductList;