import Styled from 'styled-components'

export default Styled.footer`
    height: 10vh;
    width: 100vw;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .forward, .back {
        display: flex;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        height: 5vh;
        width: 5vh;
        &:hover > span {border-color: #fff}
        span {
            display: block;
            height: 1.5vh;
            width: 1.5vh;
            border: 0 solid #888;
            transform: rotate(45deg);
            transition: border-color .42s ease-in-out;
        }
    }
    .forward > span {border-width: .22vh .22vh 0 0}
    .back > span {border-width: 0 0 .22vh .22vh}
    .page-slider {
        width: 42%;
        height: 3vh;
        display: flex;
        justify-content: space-between;
        margin: 0 2vh;
        align-items: center;
        .page {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 3vh;
            width: 3vh;
            cursor: pointer;
            &.active {
                .bubble {
                    border-color: #08f;
                    background-color: #08f;
                }
                &:hover > .bubble {background-color: #08f}
            }
            &:hover > .bubble {background-color: #ccc}
            &:hover > .tooltip {opacity: 100}
            .bubble {
                display: block;
                height: 1.5vh;
                width: 1.5vh;
                border: .11vh solid #ccc;
                border-radius: 50%;
                transition: all .42s ease-in-out;
            }
            .tooltip {
                opacity: 0;
                position: absolute;
                background-color: rgba(255,255,255,.42);
                border-radius: 1vh;
                font-size: 2.5vh;
                transition: opacity .42s ease-in-out;
                padding: 1vh;
                transform: translateY(-100%)
            }
        }
        .divider {
            height: 0;
            border-top: .22vh dashed #333;
            width: calc(100% / 3 - 3vh)
        }
    }
`