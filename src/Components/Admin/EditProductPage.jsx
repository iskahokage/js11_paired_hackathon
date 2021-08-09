import { ListItemAvatar } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { addProductContext } from '../../Contexts/ProductContext';

const EditProductPage = () => {

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
                <form>
                    <input name= "title" onChange={handleEditInput} value={newEditItem.title} type="text" />
                    <input name= "description" onChange={handleEditInput} value={newEditItem.description} type="text" />
                    <select name="category" onChange={handleEditInput} value={newEditItem.category}>
                        <option value="Urban">Urban</option> 
                        <option value="Mtb">Mtb</option>
                        <option value="Touring">Touring</option>
                        <option value="BMX">BMX</option>
                        <option value="Electro">Electro</option>
                        <option value="Folding">Folding Bicycle</option>
                    </select>
                    <input name= "price" onChange={handleEditInput} value={newEditItem.price} type="text" />
                    <input name= "img" onChange={handleEditInput} value={newEditItem.image} type="text" />
                    <Link to="/">
                     <button onClick={()=>saveProduct(newEditItem)}>Edit Product</button>
                    </Link>
                </form>
            </>
            : <h1>LOADING...</h1>
            }
        </div>
    );
};

export default EditProductPage;