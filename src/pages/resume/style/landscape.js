export default `
    align-items: center;
    display: none;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
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
    .page-content {
        width: 49.15vh;
        height: 70vh;
        background-color: white;
        display: grid;
        grid-template-rows: repeat(3, min-content) 1fr;
        grid-template-columns: min-content 1fr;
        grid-gap: 2vh;
        position: relative;
        padding: 2vh;
        .header {
            grid-column: 1 / span 2;
            display: flex;
            align-items: center;
            justify-content: space-around;
            .logo {
                height: 3.5vh;
                fill: #08f;
            }
            .name {
                font-size: 5vh;
                font-family: orbitron;
                .first {font-weight: 1000}
            }
        }
        .summary {
            border: 0 dashed black;
            padding: 1vh;
            border-width: .1vh 0;
            grid-column: 1 / span 2;
            font-family: hind;
            font-size: 1.25vh;
            text-align: justify;
        }
        .contact {
            grid-area: 3 / 1;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 3vh;
            width: max-content;
            font-size: 1.35vh;
            font-variant: small-caps;
            font-family: hind;
            .title {
                grid-column: 1 / span 2;
                font-size: 2vh;
                font-weight: 1000;
            }
            .info, .social {
                display: grid;
                grid-template-columns: 2vh max-content;
                grid-gap: .5vh;
                align-items: center;
            }
            svg {
                fill: #000;
            }
        }
    }
`