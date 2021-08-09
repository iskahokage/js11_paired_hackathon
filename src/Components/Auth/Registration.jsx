import React, { useContext, useState } from 'react';
import { clientContext } from '../../Contexts/ClientContext';

const Registration = () => {
    const {registerUser} = useContext(clientContext)
    const [NewUser, setNewUser] = useState({
        email: "",
        password: ""
    })
    const handleInput = (e) => {
        let obj = {
            ...NewUser,
            [e.target.name]: e.target.value
        }
        setNewUser(obj)
    }
    
    const handleClick = () => {
        registerUser(NewUser)
        console.log(NewUser)
    }

    return (
        <>
        <h2> Welcome! You may SignUp here!</h2>
        <div>
            <input onChange={handleInput} name="email" type="text" />
            <input onChange={handleInput} name="password" type="password" />
            <button onClick={handleClick}>SignUn</button>
        </div>
        </>
    );
};

export default Registration;