import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand ms-5 text-primary" as={Link} to="/">FakeShop</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link navigation active text-primary" aria-current="page" as={Link} to="/home">Home</Link>

                        </li>
                        <li className="nav-item">
                            <a href="home#products" className='nav-link active text-primary'>Product</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active text-primary" aria-current="page" as={Link} to="/contact-us">Contact-Us</Link>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;