import Styled from 'styled-components'

export default Styled.article`
    background-color: #111;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;

    header {
        color: #252525;
        position: absolute;
        width: 66vw;
        svg {
            font-size: 40px;
            fill: rgba(0,0,0,0);
            width: 100%;
            text {
                fill: #666;
                stroke-width: .2px;
                font-family: 'inconsolata';
                font-weight: 1000;
            }
        }
    }
    subtitle {
        font-size: 5vmin;
        line-height: 7.5vmin;
        color: #fff;
        font-family: monsterrat;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(10vw, -17vh);
        #underline {
            fill: #08f;
            width: 30vmin;
            position: absolute;
            transform: translateY(-1.5vmin);
        }
    }
`