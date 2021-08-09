import React, { useContext, useEffect } from 'react';
import { addProductContext } from '../../Contexts/ProductContext';
import './ProductList.css';
import {Paper} from '@material-ui/core'

const ProductList = () => {
    const {products, getProducts} = useContext(addProductContext)
    useEffect(()=>{
        getProducts()
      }, [])

    
    return (
        <Paper className="paper">
          <div className="container">
          <h1>There should be a list of products</h1>
          {products.map(item => (
            <li className="card">
              <span key={item.id}>{item.title}</span>
              <span key={item.id}>{item.description}</span>              
              <span key={item.id}>{item.category}</span> 
              <span key={item.id}>{item.price}</span>
              <img className="productImg" src={item.image} alt="" /><br />              
            </li>
          ))}
          </div>
        </Paper>
    );
};

export default ProductList;