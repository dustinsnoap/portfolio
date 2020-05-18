import React from 'react'

const get_class = position => {
    if(position.current === position.idx) return ' current'
    if(position.current === 0 && position.idx === position.total-1) return ' prev'
    if(position.idx === position.current-1) return ' prev'
    if(position.current === position.total-1 && position.idx === 0) return ' next'
    if(position.idx === position.current+1) return ' next'
    return ''
}

const Project = project =>
    <article className={`project${get_class(project.position)}`}>
        <h1 className='name'>{project.name}</h1>
        <img className='preview' src={project.img} alt='preview'/>
        <p className='description'>{project.description}</p>
        <aside className='tech-stack'>{project.tech.map(tech => <p key={tech}>{tech}</p>)}</aside>
    </article>

export default Project