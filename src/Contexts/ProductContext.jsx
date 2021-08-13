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
    paginationPages: 1

}

const reducer = (state=INIT_STATE, action) =>{
    switch (action.type) {
        case "GET_PRODUCTS":
            return{
                ...state,
                products: action.payload.data,
                paginationPages: 
                Math.ceil(action.payload.headers['x-total-count'] / 4) 
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
        const search = new URLSearchParams(history.location.search);
        history.push(`${history.location.pathname}?${search.toString()}`);
        let res = await axios(`${JSON_API}/${window.location.search}`)
        dispatch({
            type: "GET_PRODUCTS",
            payload: res
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
      const deleteFromCart =(id, price)=>{
        let items = JSON.parse(localStorage.getItem('cart'))
        // console.log(items.products)
        for (let i =0; i< items.products.length; i++) {
          let targetItem = JSON.parse(items.products[i].item.id);
          let targetItemPrice = JSON.parse(items.products[i].item.price);
          // console.log(targetItemPrice, price)
          
          if (targetItem == id) {
              items.products.splice(i, 1);
              // console.log(items.products)
          }
          if (targetItemPrice == price){
            items.totalPrice = items.totalPrice - price
            // console.log(a)
          }
      }
      items = JSON.stringify(items);
      console.log(items)
      localStorage.setItem("cart", items);
      getCart()
      }
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
            history,
            products: state.products,
            productToEdit: state.productToEdit,
            cart: state.cart,
            paginationPages: state.paginationPages,
            getProducts,
            addProduct,
            editProduct,
            saveProduct,
            deleteProduct,
            getCart,
            addProductToCart,
            deleteFromCart,
            changeProductCount,
        }}
        >
            {children}
        </addProductContext.Provider>
    );
};

export default ProductContextProvider;