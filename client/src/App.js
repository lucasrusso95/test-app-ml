import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ProductPage from './pages/ProductPage';

const App = () => (
    <Router>
        <Fragment>
            <Header />
            <main className="main">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/items" component={SearchPage} />
                <Route path="/items/:id" component={ProductPage} />
            </main>
            <Footer />
        </Fragment>
    </Router>
);
  
export default App;
