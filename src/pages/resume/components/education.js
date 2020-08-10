import React from 'react'

export default ({props}) => 
    <div className='school'>
        <h4 className='name'>{props.school}</h4>
        <span className='year'>{props.start_date} - {props.end_date}</span>
        <span className='field'>{props.field}</span>
        <span className='location'>{props.location}</span>
    </div>