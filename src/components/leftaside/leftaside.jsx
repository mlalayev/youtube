import React from 'react'
import '../leftaside/leftaside.css'
import you from '../../assets/you.svg'
import mainpage from '../../assets/mainpage.svg'
import youtubeshorts from '../../assets/youtubeshorts.svg'
import subscriptions from '../../assets/subscriptions.svg'


function leftaside() {
    return (
        <aside className='leftaside'>
            <div className="elementsdiv">
                <div className="elementfirst">
                    <img src={mainpage} />
                    <p>Main Page</p>
                </div>

                <div className="elementsecond">
                    <img src={youtubeshorts} />
                    <p>Shorts</p>
                </div>

                <div className="elementthird">
                    <img src={subscriptions} />
                    <p>Subscriptions</p>
                </div>

                <div className="elementfourth">
                    <img src={you} />
                    <p>You</p>
                </div>
            </div>
        </aside>
    )
}

export default leftaside