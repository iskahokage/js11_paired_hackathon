import axios from 'axios';
import React, { createContext, useContext } from 'react';
import { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { JSON_API } from '../Helpers/Consts';
import { calcSubPrice, calcTotalPrice } from '../Helpers/Functions';

export const addProductContext = React.createContext();

export const useProducts = () => {
  return useContext(addProductContext);
};

const INIT_STATE = {
    products:[],
    productToEdit: null,
    cart: [],

}

const reducer = (state=INIT_STATE, action) =>{
    switch (action.type) {
        case "GET_PRODUCTS":
            return{
                ...state,
                products: action.payload 
            }
        case "EDIT_PRODUCT":
            return{
                ...state,
                productToEdit: action.payload
            }
         case "GET_CART":
      return { ...state, cart: action.payload };
        default:
            return state;
    }

}


const ProductContextProvider = ({children}) => {
    const history = useHistory()
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProducts = async () =>{
        let {data} = await axios(JSON_API)
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }

    const addProduct =(newProduct)=>{
        axios.post(JSON_API, newProduct)
        getProducts()
    }
    const deleteProduct = async (id)=>{
        await axios.delete(`${JSON_API}/${id}`)
        getProducts()
    }   
    const editProduct = async(id)=>{
        let {data} = await axios(`${JSON_API}/${id}`)
        dispatch({
            type: "EDIT_PRODUCT",
            payload: data
        })
    }
    const saveProduct = async(newProduct)=>{
      await axios.patch(`${JSON_API}/${newProduct.id}`, newProduct)
    }
    const getCart = () => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) {
          localStorage.setItem(
            "cart",
            JSON.stringify({
              products: [],
              totalPrice: 0,
            })
          );
          cart = {
            products: [],
            totalPrice: 0,
          };
        }
        dispatch({
          type: "GET_CART",
          payload: cart,
        });
      };
      const addProductToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        if (!cart) {
          cart = {
            products: [],
            totalPrice: 0,
          };
        }
        let newProduct = {
          item: product,
          count: 1,
          subPrice: +product.price,
        };
        
        let  productToFind = cart.products.filter(
          (item) => item.item.id === product.id
        )
        if(productToFind.length == 0){
          cart.products.push(newProduct)
        }
    
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem('cart', JSON.stringify(cart));
        dispatch({
          type: "GET_CART",
          payload: cart,
        });
      };
      const changeProductCount = (count, id) => {
        let cart = JSON.parse(localStorage.getItem('cart'));
        cart.products = cart.products.map((product) => {
          if (product.item.id === id) {
            product.count = count;
            product.subPrice = calcSubPrice(product);
          }
          return product;
        });
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem('cart', JSON.stringify(cart));
        dispatch({
          type: "GET_CART",
          payload: cart,
        });
      };
    return (
        <addProductContext.Provider
        value={{
            products: state.products,
            productToEdit: state.productToEdit,
            cart: state.cart,
            getProducts,
            addProduct,
            editProduct,
            saveProduct,
            deleteProduct,
            getCart,
            addProductToCart,
            changeProductCount,
        }}
        >
            {children}
        </addProductContext.Provider>
    );
};

export default ProductContextProvider;