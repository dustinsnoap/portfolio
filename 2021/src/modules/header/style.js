//IMPORTS
import Styled from 'styled-components'

//STYLE
const Style = Styled.section`
    align-items: center;
    background-color: #333336;
    display: flex;
    height: calc(100vh - 5rem);
    justify-content: center;
    margin-top: 5rem;
    padding-bottom: 5rem;
    .content {
        color: #ccc;
        display: grid;
        grid-row-gap: 5vh;
        grid-template-columns: 1fr;
        justify-content: center;
        .title {
            display: grid;
            font-family: Pixel;
            grid-row-gap: 1vh;
            grid-template-columns: 1fr;
            text-align: center;
            .name {
                color: #fff;
                font-size: 7rem;
                font-variant: small-caps;
            }
            .position {
                font-size: 2rem;
                font-variant: small-caps;
            }
        }
        .avatar {
            justify-self: center;
            img {
                border-radius: 100%;
                height: 25rem;
                width: 25rem;
            }
        }
        .intro {
            display: grid;
            grid-row-gap: 2vh;
            grid-template-columns: 1fr;
            justify-self: center;
            p {
                font-family: Pixel;
                font-size: 1.75rem;
                &:first-of-type {
                    text-align: center;
                }
            }
        }
    }
    
`

//EXPORT
export default Style