import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BuyButton = ({ id }) => {

    // I didn't have a purchase url with the data proposed by the test.
    // I thought coming off the proposal could be bad. I saw possibilities to do it, but i was with doubt if was good or not. 
    
    return (
        <Link 
            to={`/items/${id}`} 
            className="buy-button" 
            title="Comprar"
        >
            Comprar
        </Link>
    )

};

BuyButton.propTypes = {
    id: PropTypes.string
};

BuyButton.defaultProps = {
    id: ''
};

export default BuyButton;
