import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onChange = (e) => {

        const term = e.target.value;

        this.setState({ term });

    }

    onSubmit = (e) => {
        e.preventDefault();

        const { history } = this.props;
        const { term } = this.state;

        history.push(`/items?search=${term}`);

    }

    render() {

        const { term } = this.state;

        return (
            <div className="search-bar">
                <form className="search-bar__form" role="search" onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        className="search-bar__input" 
                        name="search" 
                        placeholder="Buscar produtos, marcas e muito mais..." 
                        autoComplete="off" 
                        value={term}
                        onChange={this.onChange}
                        tabIndex="2"
                    />
                    <button type="submit" className="search-bar__button" tabIndex="3">Buscar</button>
                </form>
            </div>
        );

    }

}

export default withRouter(SearchBar);