export default `
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2vw;
    position: fixed;
    svg {
        height: 3.75em;
        cursor: pointer;
        fill: #08f;
    }
    .menu-btn {
        cursor: pointer;
        height: 3.75em;
        width: 4.95em;
        &.active {
            span {
                background-color: #08f;
                height: .33em;
                width: 4.95em;
            }
            span:nth-of-type(1) {transform: translateX(-1.75em) rotate(-45deg)}
            span:nth-of-type(2) {width: 0}
            span:nth-of-type(3) {transform: translate(-1.75em, 3.5em) rotate(45deg)}
        }
        span {
            background-color: #fff;
            height: 0.42em;
            width: 3.75em;
            position: absolute;
            transition: all 0.2s;
            transform-origin: 100% 100%;
            &:nth-of-type(1) {transform: translateX(-1.75em)}
            &:nth-of-type(2) {transform: translate(0, 1.75em)}
            &:nth-of-type(3) {transform: translate(-1.75em, 3.5em)}
        }
    }
`