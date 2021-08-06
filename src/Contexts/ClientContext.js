
import axios from 'axios';
import React from 'react';
import { AUTH_API } from '../Helpers/Consts';
export const clientContext = React.createContext()

const ClientContextProvider = (children) => {
    const registerUser = async (newUser, history) => {
        try {
            const res = await axios.post(`${AUTH_API}/registration`, newUser)
            console.log(res);
            history.push('/signin')
        }
        catch {
            alert("Wrong email or password")
        }
    }

    const loginUser = async (user, history) => {
        try{
            const res = await axios.post(`${AUTH_API}/login`, user)
            console.log(res)
            history.push('/')
        }
        catch{
            alert('wrong data!')
        }
    }
    
    return (
        <clientContext.Provider value={{
            registerUser,
            loginUser
        }}>
            {children}
        </clientContext.Provider>
    );
};

export default ClientContextProvider;