import React, { useContext, useEffect, useState } from 'react';
import { addProductContext } from '../../Contexts/ProductContext';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useHistory } from 'react-router-dom';
import ProductCard from './ProductCard';
import Header from '../Header/Header'
import { FormControlLabel, Grid, FormControl, Radio, RadioGroup, FormLabel, Paper, Container } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Button } from 'react-bootstrap';


const useStyles = makeStyles(() => ({
    
    title:{
        textAlign: "center"
    },
    paper:{
        maxWidth: "1200px",
        width:'100%',
        display: "flex",
        flexWrap: "wrap",
        margin: "0 auto",
        justifyContent: "space-evenly",
    },
    sideBar:{
        margin:'0 20px 0 20px',
    },
    filterContainer:{
        maxWidth: "300px",
        margin: '0 auto'
    },
    filter:{
        display: 'flex',
        padding: '10px 10px',
        justifyContent: 'space-around'
    },
    paginationContainer:{
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'center'
    },
    wrapper:{
        display: 'flex',
    },
    buttonContainer:{
        display:'flex',
        justifyContent: 'center',
        paddingBottom: '10px'
    }
  }));


const ProductList = () => {
    const {products, getProducts, deleteProduct, paginationPages,editProduct, filterProductsByPrice} = useContext(addProductContext)
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
    useEffect(()=>{})
   
      function fetchProducts(params, value) {
        let search = new URLSearchParams(history.location.search)
        search.set(params, value)
        let url = `${history.location.pathname}?${search.toString()}`
        history.push(url)
        getProducts(history)
    }

    function reset() {
        history.push('/catalog')
        getProducts(history)
    }

    function filterByPrice(value) {
        filterProductsByPrice(value)
    }

    return (
        <div>
                <div className={classes.filterContainer}>
                    <Grid>
                        <Paper className={classes.sideBar}>
                            <div className={classes.filter}>
                                <Grid>
                                    <FormControl component="fieldset">
                                            <h5>Категория</h5>
                                        <RadioGroup onChange={(e) => fetchProducts("category", e.target.value)} arial-label="category" name="category">
                                            <FormControlLabel value="MTB" control={<Radio />} label="MTB" />
                                            <FormControlLabel value="Городской" control={<Radio />} label="Городской" />
                                            <FormControlLabel value="Туринговый" control={<Radio />} label="Туринговый" />
                                            <FormControlLabel value="BMX" control={<Radio />} label="BMX" />
                                            <FormControlLabel value="Electro" control={<Radio />} label="Electro" />
                                            <FormControlLabel value="Складной" control={<Radio />} label="Складной" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid >
                                    <FormControl component="fieldset">
                                            <h5>Цена</h5>
                                        <RadioGroup onChange={(e) => fetchProducts("price_lte", e.target.value)} arial-label="price" name="price1">
                                            <FormControlLabel value="1000" control={<Radio />} label="1000" />
                                            <FormControlLabel value="2500" control={<Radio />} label="2500" />
                                            <FormControlLabel value="5000" control={<Radio />} label="5000" />
                                            <FormControlLabel value="7000" control={<Radio />} label="7000" />
                                            <FormControlLabel value="8500" control={<Radio />} label="8500" />
                                            <FormControlLabel value="10000" control={<Radio />} label="10000" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                            </div>
                            <div className={classes.buttonContainer}>
                                <Button onClick={reset}>
                                    Reset Filter
                                </Button>
                            </div>
                        </Paper>
                    </Grid>
                </div>
            <h1 className={classes.title}>Каталог Байков</h1>
            <div className={classes.wrapper}>
                
                <Paper className={classes.paper}>
                    <ProductCard />
                </Paper>
            </div>
            <div  className={classes.paginationContainer}>
                <Pagination count={paginationPages} page={page} onChange={handlePage} size="large"  />
            </div>
        </div>
    );
};

export default ProductList;