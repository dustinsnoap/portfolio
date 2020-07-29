export default `
    display: flex;
    flex-direction: column;
    padding: 0 6vw;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    .page-title {
        color: #333;
        font-family: orbitron;
        font-size: 16vw;
        font-variant: small-caps;
        line-height: 22vw;
    }
    .content {
        display: grid;
        grid-template-rows: 1fr 2fr;
        grid-template-columns: repeat(3, 1fr);
        align-self: center;
        justify-self: center;
        width: 85%;
        justify-items: center;
        grid-row-gap: 4vh;
        height: 100%;
        h2 {
            font-size: 4vw;
            color: #08f;
            font-family: hind;
            grid-column: span 3;
            text-align: center;
            align-self: end;
        }
        svg {
            width: 7vw;
            fill: #ccc;
            cursor: pointer;
            transition: fill .22s ease-in-out;
            &:hover {fill: #08f}
        }
    }
`