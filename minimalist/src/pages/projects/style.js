import Styled from 'styled-components'

export default Styled.main`
    background-color: #111;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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
            grid-column-start: 1;
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
                text-indent: 10%;
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
            &:hover {
                filter: grayscale(0%);
            }
        }
    }
`