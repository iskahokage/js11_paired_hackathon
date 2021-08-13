import React, { useContext, useEffect } from 'react';
import { addProductContext } from '../../Contexts/ProductContext';
import './ProductList.css';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import ProductCard from './ProductCard';
import Header from '../Header/Header'
import { FormControlLabel, Grid, FormControl, Radio, RadioGroup, FormLabel, Paper, Container } from '@material-ui/core';



const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1
    },

    title: {
        textAlign: "center"
    },
    paper: {
        maxWidth: "1300px",
        margin: "0 auto",
        padding: "10px",
    }
}));


const ProductList = () => {
    const { products, getProducts, deleteProduct, editProduct, filterProductsByPrice } = useContext(addProductContext)
    const history = useHistory()
    const classes = useStyles();
    useEffect(() => {
        getProducts()
    }, [])
    function handleClick(id) {
        deleteProduct(id)
    }

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
        <>
            <div >
                <Grid container direction={'column'} spacing={24}>
                    <Paper className={classes.paper} item>
                        <Grid >
                            <FormControl component="fieldset">
                                <FormLabel component="legend">
                                    Память
                                </FormLabel>
                                <RadioGroup onChange={(e) => fetchProducts("category", e.target.value)} arial-label="category" name="category">
                                    <FormControlLabel value="MTB" control={<Radio />} label="MTB" />
                                    <FormControlLabel value="Городской" control={<Radio />} label="Городской" />
                                    <FormControlLabel value="Туринговый" control={<Radio />} label="Туринговый" />
                                    <FormControlLabel value="BMX" control={<Radio />} label="BMX" />
                                    <FormControlLabel value="Electro" control={<Radio />} label="Electro" />
                                    <FormControlLabel value="Складной" control={<Radio />} label="Складной" />
                                </RadioGroup>
                            </FormControl>
                            <button onClick={reset}>Reset Filter</button>
                        </Grid>
                        <Grid container direction="row">
                            <FormControl component="fieldset">
                                <FormLabel component="legend">
                                    Цена
                                </FormLabel>
                                <RadioGroup onChange={(e) => filterByPrice(e.target.value)} arial-label="price" name="price1">
                                    <FormControlLabel value="1000" control={<Radio />} label="1000" />
                                    <FormControlLabel value="2500" control={<Radio />} label="2500" />
                                    <FormControlLabel value="5000" control={<Radio />} label="5000" />
                                    <FormControlLabel value="7000" control={<Radio />} label="7000" />
                                    <FormControlLabel value="8500" control={<Radio />} label="8500" />
                                    <FormControlLabel value="10000" control={<Radio />} label="10000" />
                                </RadioGroup>
                            </FormControl>

                        </Grid>
                        <h1 className={classes.title}>Каталог Байков</h1>
                        <Paper className={classes.paper}>
                            <ProductCard />
                        </Paper>
                    </Paper>
                </Grid>
            </div>

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
        </>
    );
};
export default ProductList;