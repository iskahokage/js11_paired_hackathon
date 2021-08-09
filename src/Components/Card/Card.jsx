import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from 'react-bootstrap';
import { addProductContext } from '../../Context/AdminContext';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: 240,
        marginTop: 25,
        margin: 40
    },
    image: {
        maxHeight: 180
    },
    price: {
        fontSize: 20
    }
});

export default function ProductCard({ product }) {
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
    </Card>
    );
}