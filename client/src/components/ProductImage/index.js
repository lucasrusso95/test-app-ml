import React from 'react';
import PropTypes from 'prop-types';

const ProductImage = ({ className, url, width, title }) => {
    return (
        <div className={className} itemProp="image" content={url}>
            <img src={url} width={width} alt={title} /> 
        </div>
    )
}

ProductImage.propTypes = {
    className: PropTypes.string,
    url: PropTypes.string,
    width: PropTypes.string,
    title: PropTypes.string
}

ProductImage.defaultProps = {
    className: '',
    url: '',
    width: '',
    title: ''
}

export default ProductImage;