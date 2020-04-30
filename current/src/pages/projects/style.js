import Styled from 'styled-components'

export default Styled.main`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    position: absolute;
    justify-content: center;
    transition: transform 2s ease-in-out;
    .controller {
        display: flex;
        flex-direction: column;
        height 90vh;
        justify-content: space-between;
        position: absolute;
        right: 5vw;
        top: 10vh;
        figure {
            cursor: pointer;
            display: flex;
            height: 50%;
            justify-content: center;
            transition: border-color .42s ease-in-out;
            width: 10vw;
            &:hover{&:after{border-color: #fff}}
            &:after {
                border: 0 solid #888;
                border-width: 2px 0 0 2px;
                content: '';
                display: block;
                height: 1.5em;
                transition: border-color .42s ease-in-out;
                width: 1.5em;
            }
            &.inc {
                &:after {
                    align-self: flex-end;
                    transform: translateY(-5vh) rotate(45deg)
                }}
            &.dec {
                &:after {
                    align-self: flex-start;
                    transform: translateY(5vh) rotate(225deg)
                }}
        }
    }
    .project {
        color: #ccc;
        display: grid;
        width: 67%;
        grid-template-columns: auto 1fr;
        font-family: hind;
        grid-gap: 2em;
        .name {
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 1;
            font-size: 5em;
            font-family: monsterrat;
            z-index: 100;
            text-align: center;
            align-self: end;
            color: #08f;
        }
        .description {
            display: flex;
            align-items: center;
            grid-column-start: 2;
            grid-column-end: 3;
            grid-row-start: 3;
            grid-row-end: 4;
            width: 100%;
            transition: all 1s ease-in-out;
            &:hover {
                color: #fff;
            }
            p {
                font-size: 2.5em;
                text-indent: 2.5em;
                text-align: justify;
            }
        }
        .tech-stack {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-around;
            grid-column-start: 1;
            grid-row-start: 2;
            grid-row-end: 3;
            p {
                font-size: 2.5em;
                padding: 0 .5em;
                text-align: center;
                cursor: pointer;
                transition: all .42s ease-in-out;
                &:hover {
                    color: #08f;
                }
            }
        }
        .preview {
            grid-column-start: 2;
            grid-row-start: 2;
            width: 100%;
            height: calc(40vw * 0.667);
            filter: grayscale(100%);
            transition: all 1.42s;
            border-radius: 0 2em 0 0;
            &:hover {
                filter: grayscale(0%);
            }
        }
    }
`