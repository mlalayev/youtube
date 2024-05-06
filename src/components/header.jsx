import React, { useState } from 'react';
import '../components/header.css';
import youtubelogo from '../assets/youtubelogo.svg';
import hamburger from '../assets/hamburger.svg';
import search from '../assets/search.svg';

function Header() {
    const [isInputFocused, setInputFocused] = useState(false);

    const handleFocus = () => {
        setInputFocused(true);
    };

    const handleBlur = () => {
        setInputFocused(false);
    };

    return (
        <header>
            <div className="headerleft">
                <div className="hamhover">
                    <img src={hamburger} alt='hamburger' className='hamburger' />
                </div>
                <a href="#"><img src={youtubelogo} alt='youtubelogo' className='youtubelogo' /></a>
            </div>

            <div className="headermid">
                <div className="inputgroup">
                    <img src={search} alt='searchicon' className='searchmine' id='search' />
                    <input type="text" placeholder='Ara' className='input' onFocus={handleFocus} onBlur={handleBlur} />
                    {isInputFocused && (
                        <img src={search} alt='searchicon' className="searchmine" id="search" />
                    )}
                    <div>
                        <img src={search} alt='searchicon' className='search' />
                    </div>
                </div>
            </div>

            <div className="headerright"></div>
        </header>
    );
}

export default Header;