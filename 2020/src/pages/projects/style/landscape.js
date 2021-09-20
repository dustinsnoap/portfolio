export default `
    display: none;
    flex-direction: column;
    align-items: center;
    height: 100%;
    transition: transform 2s ease-in-out;
    width: 100vw;
    &.prev, &.current, &.next {display: flex}
    &.prev {transform: translatex(-100vw)};
    &.next {transform: translatex(100vw)};
    .page-title {
        align-self: flex-end;
        color: #333;
        font-family: orbitron;
        font-size: 18vh;
        font-variant: small-caps;
        text-align: right;
    }
    .content {
        display: flex;
        height: 100%;
        justify-content: center;
        width: 94vw;
        .project {
            display: grid;
            grid-template-columns: repeat(2, minmax(7vw, min-content)) 1fr repeat(2, min-content);
            grid-template-rows: repeat(3, min-content) 1fr 10vh;
            font-family: hind;
            font-size: 3vh;
            font-variant: small-caps;
            height: 100%;
            width: 80%;
            color: #ccc;
            grid-gap: 2vh;
            .indicator {
                grid-row: 2 / span 3;
                height: 100%;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                span {
                    height: 1vh;
                    width: 1vh;
                    border: .22vh solid #333;
                    border-radius: 50%;
                    &.active {
                        background-color: #08f;
                        border: none;
                    }
                }
            }
            .name {
                font-size: 9vh;
                color: #08f;
                font-family: hind;
                font-variant: small-caps;
                grid-column: 1 / span 3;
            }
            .preview {
                height: 100%;
                width: 100%;
                background-position: center;
                background-size: cover;
                grid-row: 2 / span 3;
                grid-column: 3 / span 2;
            }
            .year {
                grid-row: 1;
                grid-column: 4;
                justify-self: end;
                align-self: end;
                h4 {display: none;}
            }
            .description {
                grid-row: 2;
                grid-column: 1 / span 2;
                font-size: 2.5vh;
            }
            .link {
                font-size: 3vh;
                grid-row: 3;
                color: #ccc;
                &:hover {color: #08f}
            }
            .tech-stack {
                grid-row: 4;
                grid-column: 1 / span 2;
                height: fit-content;
                font-size: 2vh;
                display: grid;
                grid-gap: 2vh;
                grid-template-columns: repeat(2, 1fr);
                h4 {
                    font-size: 3vh;
                    grid-row: 1;
                    grid-column: 1 / span 2;
                }
                .tech {
                    tect-align: center;
                }
            }
        }
        
    }
`