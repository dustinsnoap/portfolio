import Styled from 'styled-components'

export default Styled.main`
    align-items: center;
    cursor: pointer;
    position: relative;
    display: flex;
    height: 100%;
    justify-content: center;
    opacity: 0;
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    width: 100%;
    &.current {opacity: 100}
    &.left {transform: translateX(-100vw)}
    &.right {transform: translateX(100vw)}
    .container {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .indicator {
            width: 7.5%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            span {
                font-size: 2vh;
                width: 5vh;
                color: #ccc;
                font-family: inconsolata;
                padding: 1.25vh .75vh;
                &:hover {
                    border-right: .5vh solid #08f;
                    color: #fff;
                }
                &.current {
                    border-right: .5vh solid #08f;
                    color: #fff;
                }
            }
        }
        .meta-container {
            width: 32.5%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            .name-container {
                height: 10vh;
                width: fit-content;
                overflow: hidden;
                z-index: 110;
                .name {
                    transition: transform .42s ease-in-out;
                    height: 100%;
                    width: fit-content;
                    h1 {
                        font-size: 10vh;
                        font-family: hind;
                        font-variant: small-caps;
                        color: #ccc;
                        white-space: nowrap;
                        text-shadow: -.2vh 0 #111, 0 .2vh #111, .2vh 0 #111, 0 -.2vh #111;
                    }
                }
            } 
            .year-link {
                width: 80%;
                margin: 0 1vh 2vh 1vh;
                color: #ccc;
                display: flex;
                justify-content: space-between;
                font-size: 2vh;
                text-transform: uppercase;
                font-family: inconsolata;
                .year {

                }
                .link, .code {
                    color: #08f;
                    &:hover {color: #fff}
                }
            }
            .tech-stack {
                display: flex;
                flex-wrap: wrap;
                span {
                    font-size: 2vh;
                    color: #ccc;
                    font-family: neue;
                    padding: 1vh;
                    margin: 1vh;
                    border: .25vh solid #08f;
                    border-radius: 5vh;
                    &:hover {color: #fff}
                }
            }
        }
        .preview {
            width: 60%;
            height: 100%;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            width: 48vw;
            height: 36vw;
            z-index: 10;
            .cover {
                display: block;
                height: 100%;
                width: 100%;
                position: absolute;
            }
            .image-container {
                display: flex;
                height: 100%;
                width: 100%;
                flex-direction: column;
                position: relative;
                transition: transform .42s ease-in-out;
                img {
                    height: 100%;
                    width: 100%;
                    filter: grayscale(33%);
                }
                
            }
        }
    }
`