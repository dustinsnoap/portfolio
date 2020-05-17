import Styled from 'styled-components'

export default Styled.main`
    position: absolute;
    display: flex;
    align-items: center;
    opacity: 0;
    height: 100%;
    width: 100%;
    justify-content: center;
    transition: transform 2s ease-in-out, opacity 2s ease-in-out;
    &.current{opacity: 100}
    // &.current{display: flex}
    // &.left, &.right, &.current{display: flex}
    &.left {transform: translateX(-100vw)}
    &.right {transform: translateX(100vw)}
    h1 {
        font-size: 10vh;
        color: #ccc;
    }
    `