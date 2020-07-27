export default `
    height: 100vh;
    overflow: hidden;
    padding: 0 6vw;
    position: relative;
    .content {
        width: 88vw;
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 4vh;
        h1 {
            font-size: 22vw;
            line-height: 22vw;
            font-family: orbitron;
            color: #333;
            font-variant: small-caps;
        }
        .blurb {
            display: grid;
            grid-row-gap: 2vh;
            p {
                font-family: neue;
                color: #ccc;
                font-size: 2vh;
            }
        }
        .technical, .essential {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-row-gap: 3vh;
            h2 {
                grid-column: span 3;
                font-size: 3vh;
                font-variant: small-caps;
                color: #08f;
                font-family: hind;
                font-family: monsterrat;
                text-align: center;
            }
            span {
                color: #ccc;
                text-align: center;
                font-variant: small-caps;
                font-family: hind;
                font-size: 2vh;
            }
        }
    }
`