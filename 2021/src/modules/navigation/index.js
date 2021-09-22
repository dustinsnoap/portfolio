//IMPORTS
import React from "react"

//STYLE
import Style from './style'

//NOTE
//react-router-hash-link for anchor tags

//MODULE
const Navigation = () =>
    <Style className='navigation'>
        <ul>
            <li>
                <a>
                    <span>Home</span>
                </a>
            </li>
            <li className='active'>
                <a>
                    <span>Skills</span>
                </a>
            </li>
            <li>
                <a>
                    <span>Projects</span>
                </a>
            </li>
            <li>
                <a>
                    <span>About</span>
                </a>
            </li>
            <li>
                <a>
                    <span>Contact</span>
                </a>
            </li>
        </ul>
    </Style>

//EXPORTS
export default Navigation