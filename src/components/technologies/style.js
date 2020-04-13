import Styled from 'styled-components'

export default Styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #111;
    .fingerguns {
        width: 42%;
        height: 50%;
        border: 1px solid red;
    }
    .list {
        width: 58%;
        // height: 50%;
        display: flex;
        // border: 1px solid red;
        flex-direction: column;
        justify-content: space-between;
        .bar {
            background-color: #333;
            width: 100%;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transform: translateX(110%);
            animation: slide-in 2s ease-in-out forwards;
            cursor: pointer;
            border-radius: 5px 0 0 5px;
            &:hover {
                background-color: #666;
                .tag {background-color: #0f4080}
                .fill {background-color: #48f}
            }
            .fill {
                height: 100%;
                position: absolute;
                background-color: #04f;
                border-radius: 5px 0 0 5px;
            }
            .tag {
                border-radius: 5px 0 0 5px;
                font-size: 2vw;
                text-align: center;
                width: 4em;
                height: 100%;
                position: relative;
                color: #ccc;
                background-color: #082040;
            }
            .level {
                color: #ccc;
                position: relative;
                font-size: 2vw;
            }
        }
    }

    @keyframes slide-in {
        0% {transform: translateX(110%)}
        100% {transform: translateX(0%)}
    }
`