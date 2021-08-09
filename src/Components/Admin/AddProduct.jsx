import React, { useContext, useState } from 'react';
import { addProductContext } from '../../Contexts/AdminContext';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const AddProduct = () => {
    const {getProductsData} = useContext(addProductContext)

    const [inpTitle, setInpTitle] = useState('')
    const [inpBrand, setInpBrand] = useState('')
    const [inpDescription, setInpDescription] = useState('')
    const [inpCategory, setInpCategory] = useState('')
    const [inpPrice, setInpPrice] = useState('')
    const [inpImage, setInpImage] = useState('')
    const { addProduct } = useContext(addProductContext)
    function handleClick() {
        let newObj = {
            title: inpTitle,
            brand: inpBrand,
            description: inpDescription,
            category: inpCategory,
            price: inpPrice,
            image: inpImage,
        }
        addProduct(newObj)
        setInpTitle('')
        setInpBrand('')
        setInpDescription('')
        setInpCategory('')
        setInpPrice('')
        getProductsData()
    }

    return (
        <div>
                <h1>Adding product</h1>
            <InputGroup className="mb-4">
                <InputGroup.Text>Название</InputGroup.Text>
                <FormControl value={inpTitle} onChange={(e) => setInpTitle(e.target.value)} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Бренд</InputGroup.Text>
                <FormControl value={inpBrand} onChange={(e) => setInpBrand(e.target.value)} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Описание</InputGroup.Text>
                <FormControl value={inpDescription} onChange={(e) => setInpDescription(e.target.value)} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Категория</InputGroup.Text>
                <FormControl value={inpCategory} onChange={(e) => setInpCategory(e.target.value)} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Цена</InputGroup.Text>
                <FormControl value={inpPrice} onChange={(e) => setInpPrice(e.target.value)} />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>URL обложки</InputGroup.Text>
                <FormControl  onChange={(e) => setInpImage(e.target.value)} />
            </InputGroup>
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg" onClick={handleClick}>
                    ДОБАВИТЬ
                </Button>
                
            </div>
        </div>
    );
};

export default AddProduct;