import React from 'react';
import './From.css'

const Form = () => {
    return (
        <div className=' d-flex align-items-center justify-content-center background-color form-section rounded-3 col-12  col-sm-12 col-md-12 col-lg-12 mt-5 from'>
            <div>
                <h1>LET'S STAY IN TOUCH</h1>
                <p>Get updates on sales, specials and more</p>
                <input class="form-control" type="email" placeholder="PLEASE ENTER YOUR EMAIL" />
                <br />
                <button class="btn btn-primary">SUBMIT</button>
            </div>
        </div>
    );
};

export default Form;