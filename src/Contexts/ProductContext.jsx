import axios from 'axios';
import React from 'react';
import { useReducer } from 'react';
import { JSON_API } from '../Helpers/Consts';

export const addProductContext = React.createContext();

const INIT_STATE = {
    products:[],
}

const reducer = (state=INIT_STATE, action) =>{
    switch (action.type) {
        case "GET_PRODUCTS":
            return{
                ...state,
                products: action.payload 
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
    return (
        <addProductContext.Provider
        value={{
            products: state.products,
            getProducts
        }}
        >
            {children}
        </addProductContext.Provider>
    );
};

export default ProductContextProvider;