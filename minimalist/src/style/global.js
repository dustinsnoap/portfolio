import {createGlobalStyle} from 'styled-components'
import reset from './reset'
import fonts from './fonts'

export default createGlobalStyle`
    ${reset}
    ${fonts}
`