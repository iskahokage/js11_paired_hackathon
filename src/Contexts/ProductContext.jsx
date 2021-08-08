import React from 'react';

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



    return (
        <div>
            
        </div>
    );
};

export default ProductContextProvider;