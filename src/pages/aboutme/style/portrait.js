export default `
    .content {
        .skills {display: none}
        .social {display: none}
        .subtitle {display: none}
        grid-template-rows: repeat(2, min-content);
        .technical, .essential {
            display: grid;
            grid-row-gap: 2vh;
            grid-template-columns: repeat(3, 1fr);
            align-items: center;
            h3 {
                padding: 2.5vh 0;
                color: #08f;
                font-family: monsterrat;
                font-size: 2.5vh;
                font-variant: small-caps;
                grid-column: span 3;
                text-align: center;
            }
            span {
                color: #ccc;
                cursor: pointer;
                font-family: hind;
                font-size: 2.5vh;
                font-variant: small-caps;
                text-align: center;
                &:hover { color: #08f }
            }
        }
    }
`