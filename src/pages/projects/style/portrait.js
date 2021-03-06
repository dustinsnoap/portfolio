export default `
    .content {
        .project {
            display: grid;
            font-size: 2vh;
            font-family: hind;
            font-variant: small-caps;
            color: #ccc;
            grid-row-gap: 2vh;
            grid-column-gap: 4vw;
            grid-template-columns: repeat(2, min-content) 1fr min-content;
            width: 100%;
            &.before {transform: translatex(-100vw)}
            &.after {transform: translatex(100vw)}
            &.hidden {display: none}
            .indicator {
                display: flex;
                span {
                    height: 2vh;
                    width: 2vh;
                    border: .22vh solid #333;
                    border-radius: 50%;
                    margin-left: 2vw;
                    transition: all .22s ease-in-out;
                    &.active, &:hover {
                        border-width: 0;
                        background-color: #08f;
                    }
                }
            }
            .description{ 
                grid-column: span 4;
                grid-row: 4;
            }
            .name {
                grid-column: span 4;
                font-size: 7vw;
                color: #08f;
            }
            .preview {
                width: 100%;
                height: 50vh;
                background-position: center;
                background-size: cover;
                grid-column: span 4;
                width: 100%;
            }
            .year {
                display: flex;
                h4 {margin-right: 2vw}
                .value {color: #08f}
            }
            .link {
                color: #ccc;
                cursor: pointer;
                &:hover {color: #08f}
            }
            .tech-stack {
                display: flex;
                flex-wrap: wrap;
                grid-column: span 4;
                align-items: flex-start;
                .tech {
                    margin: 0 2vw 2vh 2vw;
                    &:hover {color: #08f}
                }
            }
        }
    }
`