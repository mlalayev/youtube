import React from 'react'
import '../mainpage/mainpage.css'
import VIDEOS from '../videos/videos.jsx'
import thumbnailone from '../../assets/thumbnailone.jpg'

function mainpage() {
    return (
        <div className='aaa'>
            <VIDEOS img={thumbnailone} text={'15:54'}/>
            <VIDEOS img={thumbnailone} />
        </div>
    )
}

export default mainpage