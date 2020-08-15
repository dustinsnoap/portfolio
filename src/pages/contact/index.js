//imports
import React from 'react'
import SVG from 'react-inlinesvg'
//data
import data_contact from '../../data/contact'
//style
import Wrapper from './style/'

const Contact = props =>
    <Wrapper className={`page contact ${props.classes}`}>
        <h1 className='page-title'>Contact</h1>
        <div className='content'>
            <div className='links'>
                <h2 className='blurb'>A full commitment's what I'm thinking of.</h2>
                {data_contact.social.map(item =>
                    <a key={item.value} className='icon' href={`mailto:${item.value}`}>
                        <SVG src={item.icon} />
                        <span>{item.value}</span>
                    </a>    
                )}
                <a className='icon' href={`mailto:${data_contact.general[0].value}`}>
                    <SVG src={data_contact.general[1].icon} />
                    <span>{data_contact.general[1].value}</span>
                </a>
            </div>
        </div>
    </Wrapper>

export default Contact