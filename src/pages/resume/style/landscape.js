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
        display: none;
    }
    .page-content {
        width: 49.15vh;
        width: 79vh;
        height: 70vh;
        height: 100vh;
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
                height: 5vh;
                fill: #08f;
            }
            .name {
                font-size: 7.5vh;
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
            font-size: 2vh;
            text-align: center;
        }
        .contact {
            grid-area: 3 / 1;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 3vh;
            width: max-content;
            font-size: 1.75vh;
            font-variant: small-caps;
            font-family: hind;
            height: min-content;
            .title {
                grid-column: 1;
                font-size: 2.5vh;
                font-weight: 1000;
            }
            .info, .social {
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 1vh;
                align-items: center;
                .item {
                    display: flex;
                    align-items: center;
                    .icon {
                        fill: #111;
                        width: 2vh;
                        max-height: 2vh;
                    }
                }
            }
        }
        .content {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 1.5vh;
            font-family: hind;
            font-size: 1.5vh;
            .group {
                display: grid;
                grid-row-gap: 1vh;
                .title {
                    font-size: 2.5vh;
                    font-weight: 1000;
                    font-variant: small-caps;
                }
                
            }
            .projects, .experiences, .education {
                .project, .experience, .school {
                    display: grid;
                    grid-gap: .5vh;
                    grid-template-columns: 1fr auto 3vh;
                    .year, .location {
                        grid-column: 2 / span 2;
                        text-align: right;
                    }
                    .name, .company, .school {
                        font-size: 1.75vh;
                        font-weight: 1000;
                        font-variant: small-caps;
                    }
                    .description, .contribution, .responsibility {
                        grid-column: 1 / span 2;
                        text-align: justify;
                    }
                    .role {
                        font-variant: small-caps;
                        font-weight: 600;
                    }
                }
            }
        }
    }
`