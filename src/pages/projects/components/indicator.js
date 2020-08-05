import React from 'react'

const get_class_name = (current, idx) =>
    current === idx ? 'active' : null

const Indicator = (props) => {
    let items = []
    for (let i=0; i<props.total; i++) items.push(i)
    return <div className='indicator'>
        {items.map((_,idx) =>
            <span
                key={idx}
                className={get_class_name(props.current, idx)}
                onClick={() => props._change_project(idx)}>
            </span>
        )}
    </div>
}

export default Indicator