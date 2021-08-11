
import axios from 'axios';
import React, { useReducer } from 'react';
import { AUTH_API } from "../Helpers/Consts";

export const authContext = React.createContext()

const INIT_STATE = {
    users: [],
<<<<<<< HEAD
    user: null,
    userEmail: ''
=======
    user: null
>>>>>>> ce15c20ae7b23bf5d7713a05fe036d6f56e887a8
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_USERS_DATA":
            return { ...state, users: action.payload }
        case "GET_USER_DATA":
            return { ...state, user: action.payload}
<<<<<<< HEAD
        case "SUCCESS_LOGIN": return {...state, userEmail: action.payload}
=======
>>>>>>> ce15c20ae7b23bf5d7713a05fe036d6f56e887a8
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
<<<<<<< HEAD
        dispatch({
            type: "SUCCESS_LOGIN",
            payload: data.login
        })
=======
>>>>>>> ce15c20ae7b23bf5d7713a05fe036d6f56e887a8
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
<<<<<<< HEAD
            userEmail: state.userEmail
=======
>>>>>>> ce15c20ae7b23bf5d7713a05fe036d6f56e887a8
        }}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContextProvider;