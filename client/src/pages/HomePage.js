import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';

class HomePage extends Component {

    render() {

        return (
            <Fragment>
                <Helmet>
                    <title>Mercado Livre Brasil</title>
                </Helmet>
                <div className="home-page"></div>
            </Fragment>
        )

    }

}

export default HomePage;
