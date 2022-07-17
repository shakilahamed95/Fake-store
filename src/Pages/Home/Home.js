import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Form from './Form/Form';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Products></Products>
            <Form></Form>
        </div>
    );
};

export default Home;