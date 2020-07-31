export default `
    display: none;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding: 0 2vw 20vh 2vw;
    transition: transform 2s ease-in-out;
    width: 100vw;
    &.prev, &.current, &.next {display: flex}
    &.prev {transform: translatex(-100vw)};
    &.next {transform: translatex(100vw)};
    .page-title {
        align-self: flex-end;
        font-size: 18vh;
        color: #333;
        font-family: orbitron;
        text-align: right;
        font-variant: small-caps;
    }
    .content {
        display: grid;
        width: 80%;
        height: 100%;
        grid-gap: 4vh;
        justify-items: center;
        grid-template-columns: min-content 1fr;
        grid-template-rows: 10vh auto 1fr 10vh;
        .subtitle {
            color: #08f;
            font-size: 9vh;
            font-family: hind;
            font-variant: small-caps;
            grid-column: 1;
            align-self: start;
        }
        .social {
            display: flex;
            width: 100%;
            justify-content: space-around;
            align-items: flex-start;
            grid-row: 2;
            a {
                height: 100%;
                svg {
                    fill: #ccc;
                    height: 4vh;
                    width: 4vh;
                }
                &:hover svg {fill: #08f}
            }
        }
        .blurb {
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 2vh;
            color: #ccc;
            font-size: 3vh;
            font-family: hind;
            grid-row: span 2;
            .highlight {color: #08f}
        }
        .skills {
            grid-row: 3;
            grid-column: 1 / -1;
            width: 100%;
            height: 100%;
        }
    }
`