
import axios from 'axios';
import React, { useReducer } from 'react';
import { AUTH_API } from "../Helpers/Consts";

export const authContext = React.createContext()

const INIT_STATE = {
    users: [],
    user: null,
    userEmail: ''
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_USERS_DATA":
            return { ...state, users: action.payload }
        case "GET_USER_DATA":
            return { ...state, user: action.payload}
        case "SUCCESS_LOGIN": return {...state, userEmail: action.payload}
        default:
            return {...state}
    }
}

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    async function getUsersData(newUser) {
        const { data } = await axios(`${AUTH_API}/users`)
        dispatch({
            type: "GET_USERS_DATA",
            payload: data
        })
    }

    const registrNewUser = async (newUser, history) => {
        await axios.post(`${AUTH_API}/users`, newUser)
        getUsersData()
        history.push('/auth')
    }

    const authUser = async (id, history) => {
        const { data } = await axios(`${AUTH_API}/users/${id}`)
        localStorage.setItem("user", JSON.stringify(data.id))
        dispatch({
            type: "SUCCESS_LOGIN",
            payload: data.login
        })
        history.push('/')
    }

    const getUserData = async (id) => {
        const { data } = await axios(`${AUTH_API}/users/${id}`)
        dispatch({
            type: "GET_USER_DATA",
            payload: data
        })
    }

    return (
        <authContext.Provider value={{
            users: state.users,
            user: state.user,
            getUsersData,
            getUserData,
            registrNewUser,
            authUser,
            userEmail: state.userEmail
        }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;