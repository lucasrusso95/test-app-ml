import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { translateCondition } from '../../helpers';

import ProductName from '../../components/ProductName';
import ProductPrice from '../../components/ProductPrice';
import ProductImage from '../ProductImage';

const ProductList = ({products}) => {

    if(products.length === 0) return null;

    return (
        <div className="product-list">
           {products.map((
               {
                   id,
                   title,
                   picture,
                   free_shipping,
                   condition,
                   price,
                }, index) => (
                <div key={index} className="product-list__item" itemScope itemType="http://schema.org/Product">
                    <Link to={`/items/${id}`}>
                        <ProductImage 
                            className="product-list__item__image"
                            url={picture}
                            width="180"
                            title={title}
                        />
                        <div className="product-list__item__info">
                            <ProductPrice 
                                className="product-list__item__price"
                                price={price}
                            >
                                {free_shipping && <i className="ico-free-shipping" title="Frete Grátis" />}
                            </ProductPrice>     
                            <ProductName
                                className="product-list__item__name"
                                title={title}
                            />
                        </div>

                        {
                            // I didn't have a city with the data proposed by the test.
                            // I thought coming off the proposal could be bad. I saw possibilities to do it, but i was with doubt if was good or not.    
                            // I used item condition to don't break layout purposed.
                        }

                        <div className="product-list__item__city" itemProp="itemCondition" content={translateCondition(condition, 'ES')}>
                            <span>
                                {translateCondition(condition, 'ES')}
                            </span>
                        </div>
                    </Link>
                </div>
           ))}
        </div>
    )

};

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.shape({
            name: PropTypes.string,
            lastname: PropTypes.string
        }),
        categories: PropTypes.arrayOf(PropTypes.string),
        items: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            price: PropTypes.shape({
                currency: PropTypes.string,
                amount: PropTypes.number,
                decimals: PropTypes.number
            }),
            picture: PropTypes.string,
            condition: PropTypes.string,
            free_shipping: PropTypes.boolean
        }))
    }))
}

ProductList.defaultProps = {
    products: []
}

export default ProductList;
