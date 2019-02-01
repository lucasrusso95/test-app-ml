import React from 'react';
import PropTypes from 'prop-types';

const ProductName = ({ className, title, children }) => {

    return (
        <h2 className={className} itemProp="name" content={title}>
            {title}
            {children}
        </h2>
    )

};

ProductName.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node
};

ProductName.defaultProps = {
    className: '',
    title: ''
};

export default ProductName;
