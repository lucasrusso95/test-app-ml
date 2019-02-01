import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { formatMoney } from '../../helpers';

const ProductPrice = ({ className, price, children }) => {
    
    const {
        currency,
        amount,
        decimals
    } = price;
    
    return (
        <div className={className} itemScope itemType="http://schema.org/PriceSpecification">
            <NumberFormat 
                value={amount} 
                decimalScale={decimals} 
                prefix={`${currency} `} 
                displayType="text"
                thousandSeparator="."
                decimalSeparator=","
                renderText={(formattedValue) => formatMoney(formattedValue)}
            /> 
            {children}
        </div>
    )
}

ProductPrice.propTypes = {
    className: PropTypes.string,
    price: PropTypes.shape({
        currency: PropTypes.string,
        amount: PropTypes.number,
        decimals: PropTypes.number
    }),
    children: PropTypes.node
}

ProductPrice.defaultProps = {
    className: '',
    price: {}
}

export default ProductPrice;