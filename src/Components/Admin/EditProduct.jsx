import { React, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import addProductContext from '../../Contexts/AdminContext';

const EditProduct = ({ setChangeId }) => {
    const { productToEdit, saveProduct } = useContext(addProductContext);
    const [newEditItem, setNewEditItem] = useState(productToEdit)

    useEffect(() => {
        setNewEditItem(productToEdit)
    }, [productToEdit])

    function handleEditInput(e) {
        let newProduct = {
            ...newEditItem,
            [e.target.name]: e.target.value,
        }
        setNewEditItem(newProduct)
        
    }

    const handleClick= () => {
        saveProduct(newEditItem)
        setChangeId(null)
    }

    return (
        <div>
            {newEditItem ?
                <>
                    <form>
                        <input name="title" onChange={handleEditInput} value={newEditItem.title} type="text" />
                        <input name="brand" onChange={handleEditInput} value={newEditItem.brand} type="text" />
                        <input name="description" onChange={handleEditInput} value={newEditItem.description} type="text" />
                        <input name="Category" onChange={handleEditInput} value={newEditItem.category} type="text" />
                        <input name="price" onChange={handleEditInput} value={newEditItem.price} type="text" />
                        <input type="text" />
                        <Link to="/">
                            <button onClick={() => saveProduct(newEditItem)}>Edit Product</button>
                        </Link>
                    </form>
                </>
                : <h1>LOADING...</h1>
            }
        </div>
    );
};

export default EditProduct;