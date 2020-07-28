export default `
    height: 100vh;
    overflow: hidden;
    padding: 0 6vw;
    position: relative;
    .container, .dead {
        display: none;
    }
    .content {
        display: grid;
        grid-row-gap: 4vh;
        grid-template-columns: 1fr;

        .indicator,
        .meta-container
        {
            display: none;
        }
        .page-title {
            color: #333;
            font-family: orbitron;
            font-size: 16vw;
            font-variant: small-caps;
            line-height: 22vw;
        }
        .projects {
            display: flex;
            position: relative;
            .project {
                display: grid;
                grid-row-gap: 2vh;
                grid-column-gap: 4vw;
                grid-template-columns: repeat(2, min-content) 1fr;
                position: absolute;
                width: 100%;
                &.before {transform: translatex(-100vw)}
                &.after {transform: translatex(100vw)}
                &.hidden {display: none}
                .preview {
                    grid-column: span 3;
                    width: 100%;
                }
                .meta {
                    color: #ccc;
                    font-size: 3vw;
                    &.name {
                        grid-column: span 3;
                        font-size: 7vw;
                        color: #08f;
                    }
                    &.year {
                        .title {margin-right: 2vw}
                        .value {color: #08f}
                    }
                    &.tech-stack {
                        display: flex;
                        flex-wrap: wrap;
                        grid-column: span 3;
                        .tech {
                            font-size: 2vw;
                            margin: 1vh 4vw 1vh 0;
                        }
                    }
                }
            }
        }
    }
`