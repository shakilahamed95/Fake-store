import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css'
const Product = ({ product }) => {
    const { title, price, description, category, image, rating, id } = product
    const navigate = useNavigate()
    const productDetails = id => {
        navigate(`/product/${id}`)
    }

    return (
        <div class="card" style={{ width: "24rem" }}>
            <img className='img' src={image} alt="..." />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <h5>Category :{category}</h5>
                <h5>Price :{price}</h5>
                <h5>Rating :{rating.count}</h5>
                <button onClick={() => productDetails(id)} className='btn btn-primary'> View Details</button>
            </div>

        </div>
    );
};

export default Product;