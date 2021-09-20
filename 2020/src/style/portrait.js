export default `
    @media (orientation: portrait) {
        .page {
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            padding: 0 6vw;
            box-sizing: border-box;
            position: relative;
            .page-title, .title {
                color: #333;
                font-family: orbitron;
                font-size: 16vw;
                font-variant: small-caps;
                line-height: 22vw;
            }
            .content {
                display: grid;
                grid-template-columns: 1fr;
                width: 100%;
                .subtitle {
                    color: #fff;
                    font-family: hind;
                    font-size: 4.5vh;
                    text-align: center;
                }
                .blurb {
                    display: grid;
                    grid-row-gap: 2.5vh;
                    p {
                        color: #ccc;
                        font-family: hind;
                        font-size: 2.5vh;
                    }
                    .highlight {color: #08f}
                }
            }
        }
    }
`