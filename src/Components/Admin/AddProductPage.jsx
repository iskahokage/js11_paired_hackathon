import React, { useContext, useState } from 'react'
import { addProductContext } from '../../Contexts/ProductContext';

const AddProductPage = () => {
    const [inpTitle, setInpTitle] = useState('')
    const [inpDescription, setInpDescription] = useState('')
    const [inpPrice, setInpPrice] = useState('')
    const [inpImage, setInpImage] = useState('')
    const [inpCategory, setInpCategory] = useState('')
    const  {addProduct} = useContext(addProductContext)
    function handleClick (){
        let newObj={    
            title:inpTitle,
            description: inpDescription,
            price: inpPrice,
            category: inpCategory,
            image: inpImage,
        }
        addProduct(newObj)
        setInpTitle('')
        setInpDescription('')
        setInpPrice('')
        setInpCategory('')
    }
    return (
        <div>
            <h1>Adding product</h1>
            <form>
                <input value={inpTitle} onChange={(e) =>setInpTitle(e.target.value)} type="text" />
                <input value={inpDescription} onChange={(e) =>setInpDescription(e.target.value)} type="text" />
                <select name="category" onChange={(e) =>setInpCategory(e.target.value)}>
                    <option value="Urban">Urban</option> 
                    <option value="Mtb">Mtb</option>
                    <option value="Touring">Touring</option>
                    <option value="BMX">BMX</option>
                    <option value="Electro">Electro</option>
                    <option value="Folding">Folding Bicycle</option>
                </select>
                <input value={inpPrice} onChange={(e) =>setInpPrice(e.target.value)} type="text" />
                <input onChange={(e) =>setInpImage(e.target.value)}type="text" />
                <img src={
                    (e)=>setInpImage(e.target.value)
                }
                />
                <button onClick={handleClick}>
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProductPage;