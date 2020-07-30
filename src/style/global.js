import {createGlobalStyle} from 'styled-components'
import reset from './reset'
import fonts from './fonts'
import portrait from './portrait'
import landscape from './landscape'

export default createGlobalStyle`
    ${reset}
    ${fonts}
    ${portrait}
    ${landscape}
    ::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    body {
        background-color: #111;
    }
    .portfolio {
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        
    }
`