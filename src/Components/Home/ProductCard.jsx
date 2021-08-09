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
        <Paper className="paper" elevation={3}>
          <div className="container">
          <h1>Our Bikes xCatalog</h1>
          {products.map(item => (
            <li className="card">
                <span key={item.id}>{item.title}</span>
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
          ))}
          </div>
        </Paper>
    );
};

export default ProductCard;