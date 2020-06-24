import Styled from 'styled-components'

export default Styled.main`
    position: absolute;
    display: flex;
    opacity: 0;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: center;
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    &.current{opacity: 100}
    &.left {transform: translateX(-100vw)}
    &.right {transform: translateX(100vw)}
    .words {
        display: grid;
        grid-template-columns: min-content 1fr;
        grid-column-gap: 2vw;
        align-items: center;
        width: 80%;
        h1 {
            font-size: 10vh;
            color: #08f;
            font-family: hind;
            text-align: right;
        }
        .life-story {
            font-size: 2.5vh;
            color: #ccc;
            font-family: neue;
        }
        p {
            padding: 1vh 0;
        }
    }
    .skills {
        position: absolute;
        height: 100%;
        width: 100%;
    }
    `