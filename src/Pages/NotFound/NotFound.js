import React from 'react';
import notfound from '../../Image/notfound.png'

const NotFound = () => {
    return (
        <div>
            <img style={{ width: "100%" }} src={notfound} className="img-fluid" alt="..."></img>
        </div>
    );
};

export default NotFound;