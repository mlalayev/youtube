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
                
                <div className="profilepic">

                </div>

                <div className="textpart">
                    <h1 className='texth'>{props.texth}</h1>
                    <p className='textp'>{props.textp}</p>
                    <p className='texttwo'>{props.texttwo}</p>
                </div>
            </div>
        </div>
    )
}

export default videos