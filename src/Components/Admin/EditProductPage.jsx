import { Container, makeStyles, MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { addProductContext } from '../../Contexts/ProductContext';
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


const EditProductPage = () => {
    
    const classes = useStyles();

    const {productToEdit, saveProduct} = useContext(addProductContext);
    const [newEditItem, setNewEditItem] = useState(productToEdit)
        useEffect(()=>{
            setNewEditItem(productToEdit)
        }, [productToEdit])

    function handleEditInput(e){
        let newProduct ={
            ...newEditItem,
        [e.target.name]:e.target.value,
        }
        setNewEditItem(newProduct)
    }
    return (
        <div>
            {newEditItem ?
            <>                    
            <Container className={classes.InputGrid}>

                    <Container className={classes.inputContainer}>
                    <TextField
                        name= "brand"
                        required
                        id="outlined-brand"
                        label="Бренд байка"
                        variant="filled"
                        value={newEditItem.brand}
                        onChange={handleEditInput}
                    />
                    <TextField
                        name= "model"
                        required
                        id="outlined-desc"
                        label="Модель байка"
                        variant="filled"
                        value={newEditItem.model}
                        onChange={handleEditInput}
                        />
                    <TextField
                        name="description"
                        required
                        id="outlined-desc"
                        label="Описание байка"
                        variant="filled"
                        value={newEditItem.description}
                        onChange={handleEditInput}
                        />
                    <NavLink to="/catalog">
                        <Button className={classes.addButton} onClick={()=>saveProduct(newEditItem)} variant="outline-primary">Изменить</Button>{' '}
                    </NavLink>
                    </Container>
                    <Container className={classes.inputContainer}>
                    <TextField
                        name="price"
                        required
                        id="outlined-price"
                        label="Цена байка"
                        variant="filled"
                        value={newEditItem.price} 
                        onChange={handleEditInput}
                        />
                    <TextField
                        name="image"
                        required
                        id="outlined-URL"
                        label="URL картинки для байка"
                        variant="filled"
                        value={newEditItem.image}
                        onChange={handleEditInput}
                        />
                    <TextField
                        name="category"
                        id="outlined-select-category"
                        select
                        label="Выберите тип байка"
                        value={newEditItem.category}
                        onChange={handleEditInput}
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
                
            </>
            : <h1>LOADING...</h1>
            }
        </div>
    );
};

export default EditProductPage;