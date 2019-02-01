import React from 'react';

import Logo from './components/Logo';
import SearchBar from './components/SearchBar';

const Header = () => (
    <header className="header">
        <div className="shell">
            <Logo />
            <SearchBar />        
        </div>
    </header>
);

export default Header;