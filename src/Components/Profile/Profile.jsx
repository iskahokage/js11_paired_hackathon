import React, { useContext, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { authContext } from '../../Contexts/AuthContext';
import Header from '../Header/Header';
import "./Profile.css"


const Profile = () => {
    const { getUserData, user } = useContext(authContext)

    const userId = JSON.parse(localStorage.getItem("user"))
    useEffect(() => {
        getUserData(userId)
    }, [])


    return (
        <>
            {user ?
                (<>
                    <Header />
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Ваш профиль</Card.Title>
                            <Card.Title>Ваш email: (Здесь должен быть ваш email)"</Card.Title>
                            {/* <Button variant="primary"></Button> */}
                        </Card.Body>
                    </Card>
                </>
                )
                :
                (null)}
        </>
    );
};

export default Profile;