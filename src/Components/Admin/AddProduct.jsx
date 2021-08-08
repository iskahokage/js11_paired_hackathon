import React, { useContext, useState } from 'react';
import { addProductContext } from '../../Contexts/AdminContext';


    const AddProduct = () => {
        const [inpTitle, setInpTitle] = useState('')
        const [inpDescription, setInpDescription] = useState('')
        const [inpPrice, setInpPrice] = useState('')
        const [inpImage, setInpImage] = useState('')
        const  {addProduct} = useContext(addProductContext)
        function handleClick (){
            let newObj={
                brand:inpTitle,
                description: inpDescription,
                price: inpPrice,
                image: inpImage,
            }
            addProduct(newObj)
            setInpTitle('')
            setInpDescription('')
            setInpPrice('')
        }
    
    return (
        <div>
            <div>
            <h1>Adding product</h1>
            <form>
                <input value={inpTitle} onChange={(e) =>setInpTitle(e.target.value)} type="text" />
                <input value={inpPrice} onChange={(e) =>setInpPrice(e.target.value)} type="text" />
                <input value={inpDescription} onChange={(e) =>setInpDescription(e.target.value)} type="text" />
                <input onChange={(e) =>setInpImage(e.target.value)}type="text" />
                <button onClick={handleClick}>
                    Add Product
                </button>
            </form>
        </div>
        </div>
    );
};
 
export default AddProduct;