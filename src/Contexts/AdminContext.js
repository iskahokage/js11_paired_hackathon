import React, { useReducer } from 'react';
import axios from 'axios';
import { JSON_API } from '../Helpers/Consts';

export const addProductContext = React.createContext();

const INIT_STATE ={
    products: [],
    productToEdit: null
}

const reducer = (state=INIT_STATE, action)=>{
    switch(action.type){
        case "GET_TODOS_DATA":
            return{
                ...state,
                products: action.payload
            }
        case "EDIT_PRODUCT":
            return{
                ...state,
                productToEdit: action.payload
            }
        default: return state
    }
}


const AddProductContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getProductsData = async () =>{
    let {data} = await axios(JSON_API)
    dispatch({
        type: "GET_TODOS_DATA",
        payload: data
    })
    }

    const addProduct = (newProduct)=>{
        axios.post(JSON_API, newProduct)
        getProductsData()
    }
    const deleteProduct = async (id)=>{
        await axios.delete(`${JSON_API}/${id}`)
        getProductsData()
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
    return (
        <addProductContext.Provider value={{
            products: state.products,
            productToEdit: state.productToEdit,
            addProduct,
            deleteProduct,
            editProduct,
            getProductsData,
            saveProduct
        }}>
            {children}
        </addProductContext.Provider>
    );
};

export default AddProductContextProvider;