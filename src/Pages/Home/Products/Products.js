import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>Total Product={products.length}</h2>
            {
                products.map(product => <Product
                    product={product}
                    key={product.id}
                ></Product>)
            }

        </div>
    );
};

export default Products;