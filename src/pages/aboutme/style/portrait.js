export default `
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    .greeting {display: none}
    .skills {display: none}
    .life-story {
        padding: 0 5vw;
        color: #ccc;
        font-size: 4vw;
        font-family: hind;
        .highlight {
            font-size: 16vw;
            color: #08f;
            font-family: orbitron;
        }
        p {
            margin: 2vh;
            &:first-of-type {
                font-size: 0;
                margin-bottom: 5vh;
            }
        }
    }
`