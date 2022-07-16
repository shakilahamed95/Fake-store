import React from 'react';

const Footer = () => {
    return (
        <div>
            <div style={{ height: "200px" }} className='text-center bg-dark text-light p-5'>
                <h5>Fake Store</h5>
                <p>Copyright &copy; {(new Date().getFullYear())}</p>
                <p>All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;