import React from 'react';

const Product = ({ product }) => {
    const { title, price, description, category, image, rating } = product
    return (
        <div>
            <img src={image} alt="" />
            <h2>{title}</h2>

        </div>
    );
};

export default Product;