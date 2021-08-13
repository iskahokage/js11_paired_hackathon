import React, { useContext, useEffect, useState } from 'react';
import { addProductContext } from '../../Contexts/ProductContext';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useHistory } from 'react-router-dom';
import ProductCard from './ProductCard';
import Header from '../Header/Header'
import { Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';


const useStyles = makeStyles(() => ({
    
    title:{
        textAlign: "center"
    },
    paper:{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
    },
  }));


const ProductList = () => {
    const {products, getProducts, deleteProduct, paginationPages,editProduct} = useContext(addProductContext)
    const classes = useStyles();
    const history = useHistory();
    const [page, setPage] = useState(1);
    

    function getPage(){
        const search = new URLSearchParams(history.location.search)
        return search.get('_page')
    }

    const handlePage = (e, page) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_page', page);
        history.push(`${history.location.pathname}?_limit=4${search.toString()}`)
        setPage(page);
        getProducts(history)
    }
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
                <ProductCard />
            </Paper>
            <Pagination count={paginationPages} page={page} onChange={handlePage} size="large" />
        </>
    );
};

export default ProductList;