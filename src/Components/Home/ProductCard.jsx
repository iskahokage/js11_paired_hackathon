import React, { useContext, useEffect } from 'react';
import { addProductContext } from '../../Contexts/ProductContext';
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
import Button from 'react-bootstrap/esm/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  
    container:{
          
      },
    card:{
      maxWidth: "320px",
      maxHeight: "auto", 
      backgroundColor: 'rgba(33,37,41, 1)' ,
      marginBottom: '30px'
      
    },
    cardTitle:{
      textAlign:'center',
      color: "white", 
    },
    cardPrice:{
      textAlign:'center',
      color: 'white',
    },
    imgContainer:{
      margin: '20px',
      // maxWidth: "300px",
      width: "280px",
      maxHeight: "150px",
      height: "100%",
    },
    bikeImg:{
      maxWidth: "280px",
      maxHeight: "170px",
    },
    buttonContainer:{
      display: "flex",
      justifyContent: "space-around",
      margin: '20px 0',
    },
    adminButtonsContainer:{
      display: "flex",
      justifyContent: "space-around",
      margin: "20px 0"
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
        <>
          {products.map(item => (
            <Paper elevation={3} className={classes.card}>
              <div className={classes.topSection}>
                <Paper elevation={3} className={classes.imgContainer}>
                  <img className={classes.bikeImg} src={item.image} alt="" />
                </Paper>
              </div>
              <div className={classes.bottomSection}>
                    <p className={classes.cardTitle}>
                      <b><h5>{item.category} {item.brand}:</h5> {item.model}</b>
                    </p>
                    <p className={classes.cardPrice}>
                      Цена: <b>{item.price}</b> Сом 
                    </p>
                <div className={classes.buttonContainer}>
                    <Button variant="primary">
                      Buy <AttachMoneyIcon/> 
                    </Button>
                    <Button variant="danger" onClick={() => addProductToCart(item)}>
                      Add to Cart <AddShoppingCartIcon/>
                    </Button>                  
                </div>
                <div className={classes.adminButtonsContainer}>
                      <button onClick={()=>handleClick(item.id)}>Delete Item<DeleteIcon/></button>
                      <NavLink to="/edit">
                            <button onClick={()=>editProduct(item.id)}>Edit Product<EditIcon/></button>
                      </NavLink>
                </div>
              </div>
            </Paper>
            
          ))}
        </>
    );
};

export default ProductCard;