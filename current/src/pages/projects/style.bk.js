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
    .controller {
        align-items: center;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        left: 10vw;
        position: absolute;
        figure {
            display: flex;
            height: 100%;
            justify-content: center;
            width: 10vw;
            &:after {
                border: 0 solid #ccc;      
                border-width: .22vw .22vw 0 0;
                content: "";
                display: block;
                height: 2vw;
                width: 2vw;
                transition: border-color .22s ease-in-out;
            }
            &.inc:after {transform: rotatez(135deg)}
            &.dec:after {
                align-self: flex-end;
                transform: rotatez(315deg);
            }
            &:hover:after {border-color: #08f}
        }
        .counter {
            align-items: center;
            color: #ccc;
            display: flex;
            font-size: 2vw;
            font-family: monsterrat;
            justify-content: space-between;
            width: 6vw;
            .current-container {
                height: 2vw;
                overflow: hidden;
            }
            .current {
                display: flex;
                height: 2vw;
                flex-direction: column;
                transition: transform .42s ease-in-out;
            }
            .spacer{
                color: #08f;
                font-size: 3vw;
            }
        }
    }
    .project {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .project-list-container {
            display: block;
            height: 31.5vw;
            width: 56vw;
            overflow: hidden;
            border-radius: 1vmin;
            .project-list {
                transition: transform .42s ease-in-out;
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
                img {
                    max-height: 100%;
                    width: 100%;
                    filter: grayscale(100%);
                }
            }
        }
        .project-name-container {
            position: absolute;
            right: 0;
            width: 42%;
            padding: .22vw;
            padding-right: 0;
            border: .20vw solid #08f;
            border-radius: 2.3vw 0 0 2.3vw;
            border-right: 0;
            transition: transform .42s ease-in-out;
            &.out {
                // transform: translateX(100%)
                transform: rotateX(180deg)
            }
            .project-name {
                font-size: 4vw;
                font-family: monsterrat;
                font-family: fira;
                font-variant: small-caps;
                width: 100%;
                background-color: rgba(17,17,17,.99);
                padding: 2vw;
                border-radius: 2vw 0 0 2vw;
                color: #ccc;
                text-align: left;
            }
        }
        .tech-stack {
            display: flex;
            margin-top: 1vw;
            align-self: flex-start;
            justify-content: flex-start;
            flex-wrap: wrap;
            .tech {
                color: #ccc;
                padding: .666vw;
                font-size: 1.42vw;
                font-family: hind;
                font-variant: small-caps;
                border: 1px solid #08f;
                border-radius: 1.13vw;
                margin: 0 1vw;
                &:first-of-type {margin-left: 0}
                &:last-of-type {margin-right: 0}
            }
        }
    }
`