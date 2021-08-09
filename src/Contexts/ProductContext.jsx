import axios from 'axios';
import React from 'react';
import { useReducer } from 'react';
import { JSON_API } from '../Helpers/Consts';

export const addProductContext = React.createContext();

const INIT_STATE = {
    products:[],
    productToEdit: null
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
        default:
            return state;
    }

}


const ProductContextProvider = ({children}) => {

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
    return (
        <addProductContext.Provider
        value={{
            products: state.products,
            productToEdit: state.productToEdit,
            getProducts,
            addProduct,
            editProduct,
            deleteProduct,
        }}
        >
            {children}
        </addProductContext.Provider>
    );
};

export default ProductContextProvider;