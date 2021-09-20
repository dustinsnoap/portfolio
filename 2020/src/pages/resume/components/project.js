import React from 'react'

export default ({props}) => 
    <div className='project'>
        <h4 className='name'>{props.name}</h4>
        <span className='year'>{props.year}</span>
        <span className='description'>{props.description}</span>
        {props.contributions.map((contribution,idx) => <p key={idx} className='contribution'>{contribution}</p>)}
    </div>