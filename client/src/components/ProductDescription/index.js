import React from 'react';
import PropTypes from 'prop-types';

const ProductDescription = ({ description }) => {
    return (
        <div className="product__description">
            <h3>Descripción del producto</h3>
            <p>{description}</p>
        </div>
    )
}

ProductDescription.propTypes = {
    description: PropTypes.string
}

ProductDescription.defaultProps = {
    description: ''
}

export default ProductDescription;