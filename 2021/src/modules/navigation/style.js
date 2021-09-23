//IMPORTS
import Styled from 'styled-components'

//STYLE
const Style = Styled.nav`
    display: block;
    background-color: #334;
    position: fixed;
    width: 100%;
    height: 5rem;
    top: 0;
    box-shadow: 0 0 .5rem .5rem #000;
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 100%;
        li {
            height: 100%;
            border-bottom: .2rem solid transparent;
            margin: 0 .125rem;
            a {
                display: flex;
                align-items: center;
                height: 100%;
                width: 100%;
                box-sizing: border-box;
                cursor: pointer;
                span {
                    font-size: 1.25rem;
                    font-family: Pixel;
                    padding: 0 1.5rem;
                }
                
            }
            &:hover, &.active {
                border-bottom: .25rem solid #08f;
                a span {color: #08f}
            }
        }
    }
`

//EXPORT
export default Style