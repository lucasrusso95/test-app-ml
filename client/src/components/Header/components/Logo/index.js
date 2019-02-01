import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
    <h1 className="logo">
        <Link to="/" className="logo__link" title="Mercado Livre Brasil" tabIndex="1">
            Mercado Livre Brasil 
        </Link>
    </h1>
);

export default Logo;