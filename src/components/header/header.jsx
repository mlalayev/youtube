import '../../components/header/header.css';
import mic from '../../assets/mic.svg';
import React, { useState } from 'react';
import search from '../../assets/search.svg';
import create from '../../assets/create.svg';
import unnamed from '../../assets/unnamed.jpg';
import history from '../../assets/history.svg';
import Dropdown from '../dropdown/dropdown.jsx';
import mainpage from '../../assets/mainpage.svg';
import playlist from '../../assets/playlist.svg';
import hamburger from '../../assets/hamburger.svg';
import rightarrow from '../../assets/rightarrow.svg';
import yourvideos from '../../assets/yourvideos.svg';
import watchlater from '../../assets/watchlater.svg';
import youtubelogo from '../../assets/youtubelogo.svg';
import yourchannel from '../../assets/yourchannel.svg';
import notifications from '../../assets/notifications.svg';
import subscriptions from '../../assets/subscriptions.svg';
import youtubeshorts from '../../assets/youtubeshorts.svg';


function Header() {
    const [isOpen, setIsOpen] = useState(false);
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
                <div className='hamhover' onClick={() => { setIsOpen(!isOpen) }}>
                    <img src={hamburger} alt='hamburger' className='hamburger' />

                    <div className={`dropdown-menu ${isOpen ? 'active' : 'inactive'}`}>
                        <ul className='dropdownul'>
                            <Dropdown img={mainpage} text={'Main Page'} className='firstchild' />
                            <Dropdown img={youtubeshorts} text={'Youtube Shorts'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <div className="hr">.</div>
                            <div className='dropdowndivv'>
                                <h1 className='you'>You <img src={rightarrow} /></h1>
                            </div>
                            <Dropdown img={yourchannel} text={'Your Channel'} />
                            <Dropdown img={history} text={'History'} />
                            <Dropdown img={playlist} text={'Playlists'} />
                            <Dropdown img={yourvideos} text={'Your Videos'} />
                            <Dropdown img={watchlater} text={'Watch Later'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />
                            <Dropdown img={subscriptions} text={'Subscriptions'} />

                        </ul>
                    </div>
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