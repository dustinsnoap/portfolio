export default `
    height: 100vh;
    overflow: hidden;
    padding: 0 6vw;
    position: relative;
    background-color: #979846;
    .content {
        display: grid;
        grid-row-gap: 4vh;
        grid-template-columns: 1fr;
        h1 {
            color: #333;
            font-family: orbitron;
            font-size: 16vw;
            font-variant: small-caps;
            line-height: 22vw;
        }
        .blurb {
            display: grid;
            grid-row-gap: 2vh;
            p {
                color: #ccc;
                font-family: neue;
                font-size: 2vh;
            }
        }
        .technical, .essential {
            display: grid;
            grid-row-gap: 3vh;
            grid-template-columns: repeat(3, 1fr);
            h3 {
                color: #08f;
                font-family: monsterrat;
                font-size: 3vh;
                font-variant: small-caps;
                grid-column: span 3;
                text-align: center;
            }
            span {
                color: #ccc;
                cursor: pointer;
                font-family: hind;
                font-size: 2vh;
                font-variant: small-caps;
                text-align: center;
                &:hover { color: #08f }
            }
        }
    }
`