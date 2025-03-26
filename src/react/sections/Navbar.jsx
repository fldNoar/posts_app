import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="link">Home</Link>
            <Link to="/posts" className="link">Posts</Link>
            <Link to="/about" className="link">About</Link>
        </nav>
    );
};

export default Navbar;