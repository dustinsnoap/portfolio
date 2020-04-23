import monsterrat from './fonts/monsterrat.ttf'
import fira from './fonts/fira500.ttf'

export default `
    @font-face {
        font-family: 'monsterrat';
        src: url(${monsterrat}) format('truetype');
    }
    @font-face {
        font-family: 'fira';
        src: url(${fira}) format('truetype');
    }
`