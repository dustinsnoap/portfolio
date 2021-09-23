// IMPORTS
import {createGlobalStyle} from 'styled-components'

// COMPONENTS
import reset from './reset'
import fonts from './fonts'

export default createGlobalStyle`
    ${reset}
    ${fonts}
    html {
        font-size: 10px;
    }
    body {
        background-color: #111;
        color: #ccc;
    }
`