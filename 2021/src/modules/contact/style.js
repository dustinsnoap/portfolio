//IMPORTS
import Styled from 'styled-components'

//STYLE
const Style = Styled.section`
    padding: 4vh 0;
    .content {
        display: flex;
        flex-direction: column;
        gap: 2vh;
        justify-content: center;
        align-items: center;
        .links {
            display: flex;
            gap: 2vh;
            .link {
                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #334;
                    padding: 1vh;
                    border-radius: 100%;
                    img {
                        height: 3vh;
                        width: 3vh;
                    }
                    &:hover {
                        background-color: #333;
                    }
                }
            }
        }
        .info {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1vh;
            span {
                font-family: Pixel;
                font-size: 1rem;
            }
        }
    }
`

//EXPORT
export default Style