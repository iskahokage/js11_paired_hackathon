import React, { useContext, useState } from 'react'
import { addProductContext } from '../../Contexts/ProductContext';

import { makeStyles } from '@material-ui/core/styles';
import ProductList from '../Home/ProductList';
import {Container, Paper} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-bootstrap';

const useStyles = makeStyles(()=>({
    title:{
        textAlign: "center"
    },
    paperContainer:{
        maxWidth: "1200px",
        margin: "20px auto",
        padding: "20px 0"
    },
    inputContainer:{
        display: "flex",
        flexDirection: "column",
        alignItems:"baseline",
        justifyContent:"space-around",
        margin: "0 auto",
        maxWidth: "1050px",
        minHeight: "250px"
    },
    InputGrid:{
        maxWidth: "800px",
        display: "flex",
        
    },  
}))

const categories = [
    {
        label:"MTB"
    },
    {
        label: 'Городской',
    }, 
    {
        label: 'Туринговый',
    },
    {
        label: 'BMX',
    },
    {
        label: 'Electro',
    },
    {
        label: 'Складной',
    },
  ];

const AddProductPage = () => {
    const [inpBrand, setInpBrand] = useState('')
    const [inpModel, setInpModel] = useState('')
    const [inpDescription, setInpDescription] = useState('')
    const [inpPrice, setInpPrice] = useState('')
    const [inpImage, setInpImage] = useState('')
    const [inpCategory, setInpCategory] = useState('MTB')
    const  {addProduct} = useContext(addProductContext)
    function handleClick (){
        let newObj={    
            brand:inpBrand,
            model: inpModel,
            description: inpDescription,
            price: inpPrice,
            category: inpCategory,
            image: inpImage,
        }
        addProduct(newObj)
        setInpBrand('')
        setInpModel('')
        setInpDescription('')
        setInpPrice('')
        setInpImage('')
    }
    
    const classes = useStyles();

    return (
        <>
            <h1 className={classes.title}>Добавление байка в каталог</h1>
        <Paper className={classes.paperContainer}>
            <Container className={classes.InputGrid}>
                <Container className={classes.inputContainer}>
                    <TextField
                        required
                        id="outlined-brand"
                        label="Бренд байка"
                        variant="filled"
                        value={inpBrand}
                        onChange={(e) =>setInpBrand(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-desc"
                        label="Модель байка"
                        variant="filled"
                        value={inpModel}
                        onChange={(e) =>setInpModel(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-desc"
                        label="Описание байка"
                        variant="filled"
                        value={inpDescription}
                        onChange={(e) =>setInpDescription(e.target.value)}
                    />
                    <Button className={classes.addButton} onClick={handleClick} variant="outline-primary">Добавить байк в каталог</Button>{' '}
                </Container>
                <Container className={classes.inputContainer}>
                    <TextField
                        required
                        id="outlined-price"
                        label="Цена байка"
                        variant="filled"
                        value={inpPrice} 
                        onChange={(e) =>setInpPrice(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-URL"
                        label="URL картинки для байка"
                        variant="filled"
                        onChange={(e) =>setInpImage(e.target.value)}
                    />
                    <TextField
                        id="outlined-select-category"
                        select
                        label="Выберите тип байка"
                        value={inpCategory}
                        onChange={(e)=> setInpCategory(e.target.value)}
                        helperText="Выберите нужный тип байка"
                        variant="filled"
                        >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Container>
            </Container>
        </Paper>
            <ProductList/>
        </>
    );
};

export default AddProductPage;