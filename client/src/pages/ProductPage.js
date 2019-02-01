import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import axios from 'axios';

import { translateCondition } from '../helpers';

import BreadCrumb from '../components/BreadCrumb';
import ProductName from '../components/ProductName';
import BuyButton from '../components/BuyButton';
import ProductPrice from '../components/ProductPrice';
import ProductImage from '../components/ProductImage';
import ProductDescription from '../components/ProductDescription';

class ProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {

        const { match: { params: { id } } } = this.props;

        axios.get(`/api/items/${id}`)
            .then(({data}) => this.setState({data}))
            .catch(e => console.error(e))

    }

    render() {

        const { data } = this.state;

        if(!data) return null;

        const { 
            item: {
                id,
                title,
                price,
                picture,
                condition,
                free_shipping,
                sold_quantity,
                description
            }
        } = data; 

        return (
            <Fragment>
                <Helmet>
                    <title>{title} - Mercado Livre Brasil</title>
                </Helmet>
                <div className="product-page" itemScope itemType="http://schema.org/Product">
                    <div className="shell">
                        
                        <BreadCrumb 
                            categories={window.categories ? window.categories : []} 
                        />

                        <div className="product" itemProp="productID" content={id}>

                            <div className="product__details">
                                <ProductImage 
                                    className="product__image"
                                    url={picture}
                                    width="680"
                                    title={title}
                                />
                                <div className="product__info">
                                    <span className="product__condition" itemProp="itemCondition" content={translateCondition(condition, 'ES')}>{translateCondition(condition, 'ES')} - {sold_quantity} vendidos</span>
                                    <ProductName
                                        className="product__name"
                                        title={title}
                                    >
                                        {free_shipping && <i className="ico-free-shipping" title="Frete Grátis" />}
                                    </ProductName>
                                    <ProductPrice 
                                        className="product__price"
                                        price={price}
                                    />
                                    <BuyButton
                                        id={id}
                                    />
                                </div>
                            </div>
                            
                            {description &&
                                <ProductDescription 
                                    description={description}
                                />
                            }

                        </div>

                    </div>
                </div>
            </Fragment>
        )

    }

}

export default withRouter(ProductPage);
