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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    card: {
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      alignItems:"center",
      justifyContent: "space-between",
      maxWidth: "300px",
      height: "400px",  
    },
    buyBtn: {
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
    },
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
  },
  }));


const ProductCard = () => {
    const {products, getProducts, deleteProduct, editProduct, addProductToCart, cart} = useContext(addProductContext)
    const classes = useStyles();
    useEffect(()=>{
        getProducts()
      }, [])
      function handleClick(id){
        deleteProduct(id)
      }
      const checkItemInCart = (id) => {
        const foundItem = cart.products.find((product) => product.item.id === id);
        return foundItem ? 'secondary' : 'default';
      };



    return (
          <div className="container">
          {products.map(item => (
            <Paper elevation={3}>

            
            <li className={classes.card}>
                <span key={item.id}>{item.brand}</span>
                <span key={item.id}>{item.model}</span>
                <span key={item.id}>{item.description}</span>              
                <span key={item.id}>{item.category}</span> 
                <span key={item.id}>{item.price}</span>
                <img className="productImg" src={item.image} alt="" />         
                <div>
                    <button className={classes.buyBtn}>
                        Buy <AttachMoneyIcon/>   
                    </button>
                    <button 
                    className={classes.addToCartBtn}
                    onClick={() => addProductToCart(item)}
                    >
                        Add to Cart <AddShoppingCartIcon/>   
                    </button>
                </div>
                <div><button onClick={()=>handleClick(item.id)}>Delete Item<DeleteIcon/></button>
                    <NavLink to="/edit">
                        <button onClick={()=>editProduct(item.id)}>Edit Product<EditIcon/></button>
                    </NavLink> </div>
            </li>
            </Paper>
            
          ))}
          </div>
    );
};

export default ProductCard;