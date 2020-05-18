import Styled from 'styled-components'

export default Styled.main`
    align-items: center;
    cursor: pointer;
    display: flex;
    height: 100%;
    justify-content: center;
    opacity: 0;
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    width: 100%;
    &.current {opacity: 100}
    &.left {transform: translateX(-100vw)}
    &.right {transform: translateX(100vw)}
    .project {
        display: grid;
        grid-template-columns: 20em 1fr;
        grid-template-rows: minmax(7vh, 5%) 3fr 1fr;
        grid-gap: 2vmin;
        height: 85%;
        width: calc(75% - 20em); //controller has width of 20em
        .name {
            align-items: center;
            color: #08f;
            display: flex;
            font-family: monsterrat;
            font-size: 4.5vh;
            grid-area: 1/2/2/3;
            justify-content: center;
        }
        .preview {
            border: 0;
            border-radius: 0 2.5vmin 0 0;
            cursor: pointer;
            filter: saturate(0%);
            grid-area: 2/2/3/3;
            height: 100%;
            outline: 0;
            overflow: hidden;
            transition: filter .42s ease-in-out;
            width: 100%;
            &:hover {filter: none}
        }
        .description {
            color: #ccc;
            font-size: 2vmin;
            grid-area: 3/2/4/3;
            text-align: justify;
            text-indent: 2vmin;
            transition: color .42s ease-in-out;
            &:hover {color: #fff}
        }
        .tech-stack {
            grid-area: 2/1/4/2;
            p {
                color: #ccc;
                font-size: 2.5vmin;
                padding: 2.5vmin;
                text-align: center;
                transition: color .42s ease-in-out;
                &:first-of-type {padding-top: 0}
                &:hover {color: #fff}
            }
        }
    }
    .controller {
        // background-color: #333300;
        height: 85%;
        width: 20em;
        display: flex;
        flex-direction: column;
        cursor: pointer;
        .prev, .next {
            display: flex;
            justify-content: center;
            padding: 5em;
            height: 100%;
            width: 100%;
            &:hover:after {border-color: #fff}
            &:after {
                border: 0 solid #888;
                border-width: 2px 0 0 2px;
                content: '';
                display: block;
                height: 1.5em;
                width: 1.5em;
                transition: border-color .42s ease-in-out;
            }
        }
        .prev:after {
            align-self: flex-end;
            transform: rotate(45deg);
        }
        .next:after {transform: rotate(225deg)}
    }
    // .project {
    //     color: #ccc;
    //     display: grid;
    //     background-color: #663300;
    //     grid-template-columns: 15em 1fr;
    //     font-family: hind;
    //     grid-gap: 2em;
    //     .name {
    //         grid-column-start: 2;
    //         grid-column-end: 3;
    //         grid-row-start: 1;
    //         font-size: 5em;
    //         font-family: monsterrat;
    //         z-index: 100;
    //         text-align: center;
    //         align-self: end;
    //         color: #08f;
    //     }
    //     .description {
    //         display: flex;
    //         align-items: center;
    //         grid-column-start: 2;
    //         grid-column-end: 3;
    //         grid-row-start: 3;
    //         grid-row-end: 4;
    //         width: 100%;
    //         transition: all 1s ease-in-out;
    //         &:hover {
    //             color: #fff;
    //         }
    //         p {
    //             font-size: 2.5em;
    //             text-indent: 2.5em;
    //             text-align: justify;
    //         }
    //     }
    //     .tech-stack {
    //         display: flex;
    //         flex-direction: column;
    //         flex-wrap: wrap;
    //         justify-content: flex-start;
    //         grid-column-start: 1;
    //         grid-row-start: 2;
    //         grid-row-end: 4;
    //         p {
    //             font-size: 2.5em;
    //             padding: .75em .5em;
    //             text-align: center;
    //             cursor: pointer;
    //             transition: all .42s ease-in-out;
    //             &:first-of-type {padding-top: 0}
    //             &:hover {color: #08f}
    //         }
    //     }
    //     .preview {
    //         grid-column-start: 2;
    //         grid-row-start: 2;
    //         width: 100%;
    //         height: calc(40vw * 0.667);
    //         filter: grayscale(100%);
    //         transition: all 1.42s;
    //         border-radius: 0 2em 0 0;
    //         &:hover {filter: grayscale(0%)}
    //     }
    // }
`