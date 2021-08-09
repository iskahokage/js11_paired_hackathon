import React, { useEffect } from 'react';
import { useContext } from 'react';
import { clientContext } from '../../Context/ClientContext';
import ProductCard from '../Card/Card';

const ProductList = () => {
    const { getProducts, products, history } = useContext(clientContext)

    const handleValue = (e) => {
        const search = new URLSearchParams(history.location.search)
        search.set('q', e.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProducts()
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <><div className="container">
            <div className="wrapper">
                <div className="product-list">
                    <span className="product-title">Шаурма</span>
                    <input className="searchbar" type="text" placeholder="Поиск"
                        onChange={(e) => handleValue(e)} />
                    <div className="product-list__main">

                        {
                            products ? (
                                products.length ? (
                                    products.map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))
                                ) : (
                                    <h1>Empty</h1>
                                )
                            ) : (
                                <h1>loading...</h1>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ProductList;