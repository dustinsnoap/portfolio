import Styled from 'styled-components'

export default Styled.section`
    background-color: #181c22;
    display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    font-family: 'monsterrat';
        text-transform: uppercase;
    position: absolute;
        height: 100vh;
        width: 100vw;
        transform: translateY(0px);

    h1 {
        font-size: 5em;
        color: #ccc;
    }
    svg {
        height: 10em;
        margin-bottom: 5em;
    }

    &.move-to-top {
        animation-name: move-up;
        animation-duration: .5s;
        animation-delay: 1s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
    }
    @keyframes move-up {
        from{transform:translateY(0px)}
        to{transform:translateY(-100vh)}
    }
`