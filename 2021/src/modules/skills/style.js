//IMPORTS
import Styled from 'styled-components'

//STYLE
const Style = Styled.section`
    background-color: #334;
    display: flex;
    justify-content: center;
    height: calc(100vh - 5rem);
    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 100%;
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
            .desc {
                font-family: Pixel;
                font-size: 2rem;
                text-align: center;
            }
            .h-line {
                display: block;
                border-bottom: .5rem solid #ccc;
            }
        }
        .proficiencies, .awards {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 50px;
            max-width: 80vh;
            width: fit-content;

            img {
                height: 10vh;
                width: 10vh;
            }
        }
    }
`

//EXPORT
export default Style