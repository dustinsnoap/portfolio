import Styled from 'styled-components'

export default Styled.main`
    position: absolute;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: center;
    transition: transform 2s ease-in-out;
    header {
        color: #252525;
        position: absolute;
        width: 67vw;
        svg {
            font-size: 40px;
            fill: rgba(0,0,0,0);
            width: 100%;
            text {
                fill: #444;
                // stroke: #444;
                stroke-width: .2px;
                font-family: 'inconsolata';
                font-weight: 1000;
            }
        }
    }
    .subtitle {
        line-height: 7.5vmin;
        color: #fff;
        font-size: 4vmin;
        font-family: monsterrat;
        font-weight: 1000;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(10vw, -17vh);
        p:first-of-type {
            font-size: 5vmin;
        }
        #underline {
            fill: #08f;
            width: 30vmin;
            position: absolute;
            transform: translateY(-1.5vmin);
        }
    }
`