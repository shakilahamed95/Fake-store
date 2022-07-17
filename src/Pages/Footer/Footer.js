import React from 'react';

const Footer = () => {
    return (
        <div>
            <div style={{ height: "200px", width: "100%" }} className='text-center bg-dark text-light p-5 '>
                <h5>FakeShop</h5>
                <p>Copyright &copy; {(new Date().getFullYear())} All rights reserved </p>
            </div>
        </div>
    );
};

export default Footer;