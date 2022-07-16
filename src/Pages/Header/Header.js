import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand ms-5" as={Link} to="/">Fake Store</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" as={Link} to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" as={Link} to="home#product">Product</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;