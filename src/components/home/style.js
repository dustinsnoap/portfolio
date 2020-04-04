import Styled from 'styled-components'

export default Styled.section`
    height: 100vh;
    width: 100vw;
    background-color: #111;
    background: linear-gradient(0deg, rgba(8,32,64,1) 0%, rgba(17,17,17,1) 60%, rgba(17,17,17,1) 100%);

    .title {
        color: #ccc;
        text-transform: uppercase;
        position: absolute;
        font-family: 'fira';
        transform: translate(7.5vw, 10vh);
        h1 {
            font-size: 6vw;
            text-transform: full-width;
        }
        h2 {
            font-size: 4vw;
            transform: translatey(2.5vh);
        }
    }
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
            background-image: linear-gradient(-45deg,rgba(0,0,0,.09) 2px,transparent 2px,transparent 4px,rgba(0,0,0,.09) 4px,rgba(0,0,0,.09) 6px,transparent 6px,transparent);
            background-size: 6px 6px;
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
        .mountains {
            position: absolute;
            bottom: 0;
            left: 0;
        }
        .stars {
            position: absolute;
            top: 0;
            left: 0;
        }
    }

    @keyframes mountain-breath {
        0% {box-shadow: 2px -2px 2px 0px #4797c5}
        100% {box-shadow: 2px -2px 4px 0px #4797c5}
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