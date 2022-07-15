import React from 'react';
import './Product.css'
const Product = ({ product }) => {
    const { title, price, description, category, image, rating } = product
    return (
        <div class="card" style={{ width: "24rem" }}>
            <img className='img' src={image} alt="..." />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <h5>Category :{category}</h5>
                <h5>Price :{price}</h5>
                <h5>Rating :{rating.count}</h5>


                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>

        </div>
    );
};

export default Product;