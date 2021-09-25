//IMPORTS
import React from "react"

//STYLE
import Style from './style'

//ASSETS
import skill_css from '../../assets/css.png'
import skill_docker from '../../assets/docker.png'
import skill_git from '../../assets/git.png'
import skill_go from '../../assets/go.png'
import skill_graphql from '../../assets/graphql.png'
import skill_html from '../../assets/html.png'
import skill_js from '../../assets/js.png'
import skill_mongo from '../../assets/mongo.png'
import skill_node from '../../assets/node.png'
import skill_postgres from '../../assets/postgres.png'
import skill_python from '../../assets/python.png'
import skill_react from '../../assets/react.png'
import skill_redux from '../../assets/redux.png'
import skill_vue from '../../assets/vue.png'
import cert_aws from '../../assets/aws.png'
import cert_lambda from '../../assets/lambda.png'
import assess_codesignal from '../../assets/codesignal.png'

//DATA
const proficiencies = [
    {src: skill_css, alt: 'css'},
    {src: skill_docker, alt: 'docker'},
    {src: skill_git, alt: 'git'},
    {src: skill_go, alt: 'go'},
    {src: skill_graphql, alt: 'graphql'},
    {src: skill_html, alt: 'html'},
    {src: skill_js, alt: 'js'},
    {src: skill_mongo, alt: 'mongo'},
    {src: skill_node, alt: 'node'},
    {src: skill_postgres, alt: 'postgres'},
    {src: skill_python, alt: 'python'},
    {src: skill_react, alt: 'react'},
    {src: skill_redux, alt: 'redux'},
    {src: skill_vue, alt: 'vue'},
]
const awards = [
    {src: cert_aws, alt: 'AWS Cloud Practicioner', href: '#'},
    {src: cert_lambda, alt: 'Lambda School Full Stack Web Developer', href: 'https://www.credly.com/badges/37293d7f-fc88-4fe4-af10-00a499fe5f17?source=linked_in_profile'},
    {src: assess_codesignal, alt: 'CodeSignal General Coding Assessment', href: 'https://app.codesignal.com/coding-report/FnWe6KCeciqzvEXFr-Fx75CEQ4en52TGxE6xiWuowL/GEZJrudCxZTZ3vQze'},
]

//MODULE
const Skills = () =>
    <Style className='skills'>
        <div className='content'>
            <div className='title-container'>
                <h2 className='title'>Skills</h2>
                <figure className='h-line'></figure>
                <p className='desc'>Languages, Frameworks, and other Proficiencies</p>
            </div>
            <div className='proficiencies'>
                {proficiencies.map(proficiency =>
                    <img src={proficiency.src} alt={proficiency.alt}/>
                )}
            </div>
            <div className='title-container'>
                <h2 className='title'>Awards and Certificates</h2>
                <figure className='h-line'></figure>
            </div>
            <div className='awards'>
                {awards.map(award =>
                    <img src={award.src} alt={award.alt}/>
                )}
            </div>
        </div>
    </Style>

//EXPORTS
export default Skills