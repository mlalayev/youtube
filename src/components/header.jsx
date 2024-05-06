import '../components/header.css';
import mic from '../assets/mic.svg';
import React, { useState } from 'react';
import search from '../assets/search.svg';
import create from '../assets/create.svg';
import unnamed from '../assets/unnamed.jpg';
import hamburger from '../assets/hamburger.svg';
import youtubelogo from '../assets/youtubelogo.svg';
import notifications from '../assets/notifications.svg';

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
                <p className='hdrlftp'>AZ</p>
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

                <div className="micdiv">
                    <img src={mic} className='mic' />
                </div>
            </div>

            <div className="headerright">
                <div className="creatediv">
                    <img src={create} className='create' />
                </div>

                <div className="notifdiv">
                    <img src={notifications} className='notifications' />
                </div>

                <img src={unnamed} className='unnamed' />
            </div>
        </header>
    );
}

export default Header;