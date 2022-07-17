import React, { useRef } from 'react';
import './From.css'

const Form = () => {
    const ref = useRef(null);
    const handleRemove = () => {
        ref.current.value = '';
    };

    return (
        <div className=' d-flex align-items-center justify-content-center background-color form-section rounded-3 col-12  col-sm-12 col-md-12 col-lg-12 mt-5 mb-2 from'>
            <div>
                <h1>LET'S STAY IN TOUCH</h1>
                <p>Get updates on sales, specials and more</p>
                <input class="form-control" type="email" ref={ref} placeholder="PLEASE ENTER YOUR EMAIL" />
                <br />
                <button onClick={handleRemove} class="btn btn-primary" type='submit'>SUBMIT</button>
            </div>
        </div>
    );
};

export default Form;