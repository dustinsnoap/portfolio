import React from 'react'
import SVG from 'react-inlinesvg'

export default ({props}) =>
    <div className='item'>
        {console.log(props)}
        <SVG className='icon' src={props.icon} />
        <span className='value'>{props.value}</span>
    </div>