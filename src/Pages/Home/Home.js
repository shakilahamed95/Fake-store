import React from 'react';
import Banner from './Banner/Banner';
import Form from './Form/Form';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Form></Form>
        </div>
    );
};

export default Home;