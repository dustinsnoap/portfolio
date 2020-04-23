import Styled from 'styled-components'

export default Styled.div`
    overflow: hidden;
    .loading-screen {
        z-index: 1000;
    }
    #intro {
        height: 100vh;
        width: 100vw;
        .particles {
            height: 100%;
            width: 100%;
            background-color: #333;
        }
    }
    .next {
        height: 100vh;
        width: 100vw;
        background-color: #ccc;
    }
`