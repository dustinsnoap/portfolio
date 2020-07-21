import {createGlobalStyle} from 'styled-components'
import reset from './reset'
import fonts from './fonts'

export default createGlobalStyle`
    ${reset}
    ${fonts}
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