import {createGlobalStyle} from 'styled-components'
import reset from './reset'
import fonts from './fonts'

export default createGlobalStyle`
    ${reset}
    ${fonts}
    body {
        overflow: hidden;
        background-color: #111;
        // display: flex;
        // justify-content: flex-start;
        // height: 100vh;
    }
    .portfolio {
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
    }
`