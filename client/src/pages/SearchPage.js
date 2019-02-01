import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import queryString from 'query-string';
import axios from 'axios';

import BreadCrumb from '../components/BreadCrumb';
import ProductList from '../components/ProductList';

const DEFAULT_LIMIT = 4;

class SearchPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null
        };

    }

    setProductsByLocationSearch(locationSearch) {

        const { search: term } = queryString.parse(locationSearch);

        axios.get(`/api/items/?q=${term}&limit=${DEFAULT_LIMIT}`)
            .then(({data}) => {
                this.setState({data});

                // It's only because i don't have the data when i access product page directly. 
                // And the fast way for me was solve one path when you enter in the search page and goes to product page.
                // I know that have other ways to do it like Redux, but I had doubts don't having data when access the product page directly.
                window.categories = this.state.data.categories;
            })
            .catch(e => console.log(e));

    }
    
    componentWillReceiveProps(nextProps) {

        // I was left with doubts about using a simple redirect or using React's life cycle.
        // I chose to use the life cycle.
        if(nextProps.location.search !== this.props.location.search) { 
            this.setProductsByLocationSearch(nextProps.location.search);
        }

    }

    componentDidMount() {
        this.setProductsByLocationSearch(this.props.location.search);
    }

    render() {

        const { data } = this.state;

        const { search: term } = queryString.parse(this.props.location.search);

        if(!data) return null;
        
        const { categories, items } = data;

        return (
            <Fragment>
                <Helmet>
                    <title>{term} - Mercado Livre Brasil</title>
                </Helmet>
                <div className="search-page">
                    <div className="shell">
                        <BreadCrumb 
                            categories={categories} 
                        />
                        <ProductList 
                            products={items}
                        />
                    </div>
                </div>
            </Fragment>
        )

    }

}

export default SearchPage;
