import React from 'react'

export default ({props}) => 
    <div className='experience'>
        <h4 className='company'>{props.company}</h4>
        <span className='year'>{props.start_date} - {props.end_date}</span>
        <span className='role'>{props.role}</span>
        <span className='location'>{props.location}</span>
        {props.responsibilities.map((responibility,idx) =>
            <p key={idx} className='responsibility'>{responibility}</p>
        )}
    </div>