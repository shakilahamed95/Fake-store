import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
    const { id } = useParams()
    const [productDetails, setProductDetails] = useState({})
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProductDetails(data))
    }, [])
    return (
        <div>
            <h2 className='text-primary text-center mt-5'> Product Details</h2>
            <div className='d-flex justify-content-center align-items-center'>
                <div className="card mb-3 mt-5" style={{ width: "1000px", }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={productDetails.image} className="img-fluid rounded-start img" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body ms-5">
                                <h3 className="card-title">{productDetails.title}</h3>
                                <h5>Category:{productDetails.category}</h5>
                                <p className="card-text">{productDetails.description}</p>
                                <h5>Price: ${productDetails.price}</h5>
                                <h5>Rating: {productDetails.rating?.rate}  <i className="fa-solid fa-star"></i></h5>
                                <h5>Rated by: {productDetails.rating?.count} People</h5>
                                <button className='btn btn-primary'> Buy Now  <i class="fa-solid fa-cart-arrow-down"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;