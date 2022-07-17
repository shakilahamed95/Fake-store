import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <h1 className='text-center text-primary mt-5'>Find Us</h1>
            <div className='d-flex align-items-center justify-content-center'>
                <a href="https://www.facebook.com/" target='_blank' rel="noreferrer"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.linkedin.com/" target='_blank' rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://twitter.com/" target='_blank' rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>

            </div>
        </div>
    );
};

export default ContactUs;