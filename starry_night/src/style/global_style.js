import {createGlobalStyle} from 'styled-components'
import {reset} from 'styled-reset'
import fonts from './fonts'

export default createGlobalStyle`
    ${reset}
    ${fonts}
    * {box-sizing: border-box}
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
    html {
        font-size: 62.5%;
        height: 100%;
        width: 100%;
        font-family: 'monsterrat'
    }
    body {
        height: 100%;
        width: 100%;
    }
    #portfolio {
        height: 100%;
    }
`