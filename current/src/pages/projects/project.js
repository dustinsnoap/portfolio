import React from 'react'

const get_class = position => {
    if(position.current === position.idx) return ' current'
    if(position.current === 0 && position.idx === position.total-1) return ' prev'
    if(position.idx === position.current-1) return ' prev'
    if(position.current === position.total-1 && position.idx === 0) return ' next'
    if(position.idx === position.current+1) return ' next'
    return ''
}

let hidden = false

// convert to class component to use mouseover

const Project = project =>
    <article className={`project${get_class(project.position)}`}>
        <h1 className='name'>{project.name}</h1>
        <p className={`description${hidden ? ' hidden' : ''}`}>{project.description}</p>
        <div className='tech-stack'>{project.tech.map(tech => <p key={tech} className='tech'>{tech}</p>)}</div>
        <div className='buttons'>
            <span className='preview-toggle' onMouseOver={() => {hidden = true}}>preview</span>
            <a className='link' href={project.link}>visit</a>
        </div>
        <img className='preview' src={project.img} alt='preview'/>
        {project.position.idx === 0 ? <div className='scroll-indicater'>farts mcgee</div> : null}
    </article>

export default Project