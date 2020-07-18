export default `
    position: absolute;
    display: flex;
    align-items: center;
    opacity: 0;
    height: 100%;
    width: 100%;
    justify-content: center;
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    &.current{opacity: 100}
    &.left {transform: translateX(-100vw)}
    &.right {transform: translateX(100vw)}
    header {
        color: #252525;
        position: absolute;
        width: 67vw;
        svg {
            font-size: 40px;
            fill: rgba(0,0,0,0);
            width: 100%;
            text {
                fill: #444;
                stroke-width: .2px;
                font-family: 'inconsolata';
                font-weight: 1000;
            }
        }
    }
    .subtitle {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(10vw, -6vh);
        p {
            color: #ccc;
            font-family: incolsolata;
            font-family: lora;
            font-size: 6vh;
            line-height: 8vh;
        }
        .tags {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p {
                color: #08f;
                font-size: 3vh;
                line-height: 5vh;
                font-family: neue;
            }
        }
        #underline {
            display: none;
            fill: #08f;
            width: 60vmin;
            position: absolute;
            transform: translateY(-1vh) translatex(0vw);
        }
    }
`