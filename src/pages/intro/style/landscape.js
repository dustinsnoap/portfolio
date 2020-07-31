export default `
    align-items: center;
    display: none;
    height: 100%;
    justify-content: center;
    position: absolute;
    transition: transform 2s ease-in-out;
    width: 100vw;
    &.prev, &.current, &.next {display: flex}
    &.prev {transform: translatex(-100vw)};
    &.next {transform: translatex(100vw)};
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