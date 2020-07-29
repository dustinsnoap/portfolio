export default `
    height: 100vh;
    overflow: hidden;
    padding: 0 6vw;
    position: relative;
    .content {
        display: grid;
        grid-template-rows: min-content 1fr;
        grid-template-columns: 1fr;
        .greeting {display: none}
        .skills {display: none}
        .page-title {
            color: #333;
            font-family: orbitron;
            font-size: 16vw;
            font-variant: small-caps;
            line-height: 22vw;
        }
        .blurb {
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 2vh;
            color: #ccc;
            font-size: 3vh;
            font-family: neue;
            .highlight {color: #08f}
        }
    }
    
`