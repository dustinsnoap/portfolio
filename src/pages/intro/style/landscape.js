export default `
    background-color: #111;
    width: 100vw;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
        display: grid;
        grid-template-rows: repeat(4, min-content);
        .title {
            font-size: 22vh;
            font-family: orbitron;
            color: #333;
        }
        .subtitle {
            font-size: 6vh;
            font-family: hind;
            font-variant: small-caps;
            color: #ccc;
        }
        .tag {
            font-family: hind;
            font-size: 3vh;
            font-variant: small-caps;
            color: #08f;
            padding: 1vh 0;
        }
    }
`