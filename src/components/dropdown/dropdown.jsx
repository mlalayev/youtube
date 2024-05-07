import React from 'react'
import '../dropdown/dropdown.css'

function dropdown(props) {
    return (
        <li className='dropdownitem'>
            <div className='dropdowndiv'>
                <img src={props.img} />
                <a href="">{props.text}</a>
            </div>
        </li>
    )
}

export default dropdown