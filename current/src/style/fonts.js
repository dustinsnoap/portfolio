import monsterrat from './fonts/monsterrat.ttf'
import fira from './fonts/fira500.ttf'
import inconsolata from './fonts/inconsolata.ttf'
import lora from './fonts/lora.ttf'
import hind from './fonts/hind.ttf'

export default `
    @font-face {
        font-family: 'monsterrat';
        src: url(${monsterrat}) format('truetype');
    }
    @font-face {
        font-family: 'fira';
        src: url(${fira}) format('truetype');
    }
    @font-face {
        font-family: 'inconsolata';
        src: url(${inconsolata}) format('truetype');
    }
    @font-face {
        font-family: 'lora';
        src: url(${lora}) format('truetype');
    }
    @font-face {
        font-family: 'hind';
        src: url(${hind}) format('truetype');
    }
`