import Styled from 'styled-components'

export default Styled.main`
    position: absolute;
    display: flex;
    align-items: center;
    opacity: 0;
    height: 100%;
    width: 100%;
    justify-content: center;
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    &.current{opacity: 100}
    &.left {transform: translateX(-100vw)}
    &.right {transform: translateX(100vw)}
    .controller {
        align-self: flex-end;
        color: #ccc;
        font-family: hind;
        font-size: 3vh;
        font-variant: small-caps;
        position: absolute;
        right: 12.5%;
        span {
            cursor: pointer;
            padding: 0 1vw;
            &:hover {color: #fff}
        }
    }
    .step {
        position: absolute;
        width: 100vw;
        height: 100%;
        transition: width 2s ease-in-out;
        overflow: hidden;
        left: 0;
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100vw;
            background-color: #111;
            &.question {
                h1 {
                    font-family: hind;
                    font-size: 8vh;
                    font-variant: small-caps;
                    color: #888;
                    span {
                        color: #ccc;
                        text-decoration: underline;
                        text-decoration-color: #08f;
                        text-underline-position: under;
                        transition: color .22s ease-in-out;
                        &:hover {
                            color: #fff;
                            cursor: pointer;
                        }
                    }
                }
            }
            &.letter {
                padding: 10vh 10vw;
                display: grid;
                grid-template-rows: min-content 1fr;
                grid-template-columns: 1fr;
                grid-row-gap: 2vh;
                h2 {
                    color: #ccc;
                    font-family: neue;
                    font-size: 5vh;
                }
                .message {
                    background: transparent;
                    border: 1px solid #08f;
                    height: 100%;
                    border: none;
                    outline: none;
                    font-size: 4vh;
                    font-family: neue;
                    color: #888;
                    resize: none;
                }
            }
            &.signature {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 10vh 10vw;
                h2 {
                    font-size: 4vh;
                    color: #ccc;
                    font-family: hind;
                }
                input {
                    background-color: transparent;
                    border: none;
                    font-size: 3vh;
                    font-family: neue;
                    border-bottom: .25vh solid #08f;
                    margin: 1vh 0;
                    outline: none;
                    color: #ccc;
                }
            }
            &.sent {
                display: flex;
                flex-direction: column;
                h3, span {
                    font-size: 4vh;
                    font-family: neue;
                    color: #ccc;
                    text-align: center;
                }
                span {
                    cursor: pointer;
                    padding: 4vh;
                    color: #08f;
                    font-variant: small-caps;
                    font-family: hind;
                }
            }
        }
        &.inactive {width: 0}
    }
`