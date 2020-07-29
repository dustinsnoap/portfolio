import React from 'react'
import Indicator from './indicator'

const Project = (project) => 
    <div className='project'>
        <h2 className='name'>{project.name}</h2>
        <figure className='preview' style={{backgroundImage: `url(${project.img})`}}></figure>
        <div className='year'>
            <span className='title'>Year:</span>
            <span className='value'>{project.year}</span>
        </div>
        <a className='meta link live' href={project.link}>Live</a>
        <a className='meta link code' href={project.code}>Code</a>
        <Indicator current={project.idx} total={project.total} _change_project={project._change_project}/>
        <div className='meta tech-stack'>
            <h3 className='title'>Tech:</h3>
            {project.tech.map(tech => 
                <span className='tech' key={tech}>{tech}</span>    
            )}
        </div>
    </div>

export default Project