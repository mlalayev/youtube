import React from 'react'
import '../videos/videos.css'

function videos(props) {
    return (
        <div className="fullvideodiv">
            <div className="imgpartofvideo">
                <img src={props.img} />
                <p className='timeofvideo'>{props.text}</p>
            </div>
            <div className="expofvideo">
                <h1>{props.texth}</h1>
                <p>{props.textp}</p>
                <p>{props.texttwo}</p>
            </div>
        </div>
    )
}

export default videos