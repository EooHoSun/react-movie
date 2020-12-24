import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
function Navigation() {
    return (
        <div className="navigation">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/about">About</Link>
        </div>
    );
};


export default Navigation;