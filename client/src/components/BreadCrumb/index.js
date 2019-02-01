import React from 'react';
import PropTypes from 'prop-types';

const BreadCrumb = ({categories}) => {

    if(categories.length === 0) return null;

    return (
        <div className="breadcrumb">
            <ol className="breadcrumb__list">
                {categories.map((category, index) => (
                    <li key={index} itemType="http://data-vocabulary.org/Breadcrumb" className="breadcrumb__list__item">
                        <span itemProp="title">{category}</span>
                    </li>
                ))}
            </ol>
        </div>
    )

};

BreadCrumb.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.string)
}

BreadCrumb.defaultProps = {
    categories: []
}

export default BreadCrumb;
