import Styled from 'styled-components'

export default Styled.section`
    height: 100vh;
    width: 100vw;
    background-color: #111;

    .background {
        height: 100vh;
        width: 100vw;
        position: absolute;
        .moon {
            animation: moon-breath 3s ease-in-out infinite alternate;
            background-color: #fff;
            border-radius: 50%;
            box-shadow: 0 0 2.0em rgba(0,128,255,.2),
                        0 0 0 2.5em rgba(128,128,128,.1),
                        0 0 0 5.0em rgba(128,128,128,.1),
                        0 0 0 7.5em rgba(128,128,128,.1);
            content: '';
            position: absolute;
                height: 25em;
                right: 0;
                transform: translate(-20vw, 20vh);
                width: 25em;
            &::after {
                border-radius: 50%;
                box-shadow: 13.5em 13.5em 0 3.5em #f0f0e3,
                            20.0em 15.5em 0 1.0em #f0f0e3,
                            14.5em 20.5em 0 2.0em #f0f0e3;
                content: '';
                display: block;
                height: 1px;
                width: 1px;
                
            }
        }
        // switch to svg line
        // 2nd line for highlight
        .mountain {
            position: absolute;
            bottom: 0;
            height: 75vmin;
            width: 75vmin;
            background: linear-gradient(to bottom, #0b0d12 5%, #1f2c31);
            border-radius: 5vmin;
            transform: translateY(70%) rotateZ(45deg);
            box-shadow: 2px -2px 2px 0px #4797c5;
            animation: mountain-breath 3s ease-in-out infinite alternate;
        }
    }

    @keyframes mountain-breath {
        0% {
            box-shadow: 2px -2px 2px 0px #4797c5;
        }
        100% {
            box-shadow: 2px -2px 4px 0px #4797c5;
        }
    }
    @keyframes moon-breath {
        0% {
            box-shadow: 0 0 2.0em rgba(0,128,255,.2),
                        0 0 0 2.5em rgba(128,128,128,.1),
                        0 0 0 5.0em rgba(128,128,128,.1),
                        0 0 0 7.5em rgba(128,128,128,.1);
        }
        100% {
            box-shadow: 0 0 2.0em rgba(0,128,255,.2),
                        0 0 0 2.75em rgba(128,128,128,.1),
                        0 0 0 5.5em rgba(128,128,128,.1),
                        0 0 0 8.25em rgba(128,128,128,.1);
        }
    }
    
    
`