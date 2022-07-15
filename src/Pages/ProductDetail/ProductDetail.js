import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
            <h2 className='Text-primary text-center mt-5'> Product Details</h2>
            <div className='d-flex justify-content-center align-items-center'>
                <div class="card mb-3 mt-5" style={{ width: "1000px", }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={productDetails.image} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body ms-5">
                                <h3 class="card-title">{productDetails.title}</h3>
                                <h5>Category:{productDetails.category}</h5>
                                <p class="card-text">{productDetails.description}</p>
                                <h5>Price: ${productDetails.price}</h5>
                                <h5>Rating: {productDetails.rating?.rate}</h5>
                                <h5>Rated by: {productDetails.rating?.count} People</h5>
                                <button className='btn btn-primary'> Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;