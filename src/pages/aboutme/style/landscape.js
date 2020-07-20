export default `
    position: absolute;
    display: flex;
    opacity: 0;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: center;
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    &.current{opacity: 100}
    &.left {transform: translateX(-100vw)}
    &.right {transform: translateX(100vw)}
    .container {
        display: grid;
        grid-template-columns: min-content 1fr;
        grid-template-rows: 1fr 22%;
        grid-gap: 2vw;
        align-items: center;
        width: 80%;
        height: 100%;
        position: relative;
        .greeting {
            h1 {
                font-size: 10vh;
                color: #08f;
                font-family: hind;
                text-align: right;
            }
            .social {
                display: flex;
                justify-content: space-around;
                svg {
                    height: 3.5vh;
                    width: 3.5vh;
                    cursor: pointer;
                    padding: 2.5vh;
                    &:hover {fill: #08f}
                }
            }
        }
        .life-story {
            font-size: 2.5vh;
            color: #ccc;
            font-family: neue;
            p {
                padding: 1vh 0;
                .highlight {color: #08f}
            }
        }
        .skills {
            grid-column: 1/3;
            grid-row: 2;
            height: 100%;
            width: 100%;
        }
    }
`