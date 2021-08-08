import React, { useContext, useState } from 'react';
import { clientContext } from '../../Contexts/ClientContext';

const Login = () => {
    const {loginUser} = useContext(clientContext)
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const handleInput = (e) => {
        let obj = {
            ...user,
            [e.target.name]: e.target.value
        }
        setUser(obj)
    }
    
    const handleClick = () => {
        loginUser(user)
        console.log(user)
    }


    return (
        <>
        <h2> Welcome! You may LogIn here!</h2>
        <div>
            <input onChange={handleInput} name="email" type="text" />
            <input onChange={handleInput} name="password" type="password" />
            <button onClick={handleClick}>LogIn</button>
        </div>
        </>
    );
};

export default Login;