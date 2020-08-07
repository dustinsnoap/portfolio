export default `
    align-items: center;
    display: none;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    transition: transform 2s ease-in-out;
    width: 100vw;
    &.prev, &.current, &.next {display: flex}
    &.prev {transform: translatex(-100vw)};
    &.next {transform: translatex(100vw)};
    .page-title {
        align-self: flex-end;
        font-size: 18vh;
        color: #333;
        font-family: orbitron;
        text-align: right;
        font-variant: small-caps;
    }
`