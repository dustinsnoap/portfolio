//IMPORTS
import React from "react"

//STYLE
import Style from './style'

//ASSETS
import working from '../../assets/avatar.gif'

//DATA
const text = [
    'Ever since I was a kid, software development has been my passion. I still remember picking up a ti-83 calculator; seeing the code to my favorite game and "hacking" it for extra lives. As I taught myself BASIC, it was almost magic, being able to get a computer to do whatever I wanted. I was limited only by my own imagination and ingenuity. Throughout middleschool and high school I latched on to any ideas for projects I could get, moving from a racing game to algorithms that could ace any math test I was given. I learned C++, HTML, CSS, Javascript, anything I could get the source code to. I was insatiable.',
    "My passion carried me to Lambda School which introduced me to Web Development including Python, SQL, MongoDB. Concepts like both Model View View Model (MVVM) and Model View Controller (MVC) design patterns as well as the AGILE methodology were a heavy focus while working with React and NodeJS on small teams. I quickly rose from being a student to Team Leader to Technical Project Manager where I had the chance to share my passion and teach others.",
    "My specialties include quickly learning new skills, programming languages, problem solving, responsive design principles, website optimization, and security. At the moment I'm learning Golang and studying for my first AWS certificate. I have long backlog of programming languages, frameworks and principles I can't wait to learn and integrate into future projects."
]

//MODULE
const About = () =>
    <Style className='about'>
        <div className='content'>
            <div className='title-container'>
                <h2 className='title'>About</h2>
                <figure className='h-line'></figure>
            </div>
            <img className='avatar' src={working} alt='Avatar Working'/>
            <div className='text'>
                {text.map((paragraph, i) => 
                    <p key={i}>{paragraph}</p>
                )}
            </div>
        </div>
    </Style>

//EXPORTS
export default About