import React from 'react'

const Project = project => {
    return <div className='project-wrapper'>
        <article className='project'>
            <h2 className='name'>{project.name}</h2>
            <section className='description'>
                <p>{project.description}</p>
            </section>
            <img className='preview' src={project.img} alt='preview'/>
            <section className='tech-stack'>
                {project.tech.map(tech =>
                    <p className='tech' key={tech}>{tech}</p>
                )}
            </section>
            <section className='description'>
                <p>{project.description}</p>
            </section>
        </article>
    </div>
}

export default Project