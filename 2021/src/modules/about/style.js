//IMPORTS
import Styled from 'styled-components'

//STYLE
const Style = Styled.section`
    background-color: #334;
    display: flex;
    justify-content: center;
    height: fit-content;
    min-height: calc(100vh - 5rem);
    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: fit-content;
        gap: 5vh;
        padding: 5vh 0;
        .title-container {
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 1vh;
            width: fit-content;
            .title {
                font-family: Pixel;
                font-size: 5rem;
                text-align: center;
            }
            .h-line {
                display: block;
                border-bottom: .5rem solid #ccc;
            }
        }
        .avatar {
            height: 20vh;
        }
        .text {
            display: flex;
            flex-direction: column;
            width: 40vh;
            gap: 5vh;
            p {
                font-family: Pixel;
                font-size: 1.5rem;
            }
        }
    }
    
`

//EXPORT
export default Style