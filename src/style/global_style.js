import {createGlobalStyle} from 'styled-components'
import {reset} from 'styled-reset'

export default createGlobalStyle`
    ${reset}
    * {box-sizing: border-box}
    html {
        font-size: 62.5%;
        height: 100%;
        width: 100%;
    }
    body {
        height: 100%;
        width: 100%;
    }
    #portfolio {
        height: 100%;
    }
`