//IMPORTS
import Styled from 'styled-components'

//STYLE
const Style = Styled.nav`
    background-color: #334;
    position: fixed;
    width: 100%;
    box-shadow: 0 0 5px 5px #000;
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        height 4em;
        
        li {
            height: 100%;
            border-bottom: .2em solid transparent;
            margin: 0 .1em;
            a {
                display: flex;
                align-items: center;
                height: 100%;
                width: 100%;
                box-sizing: border-box;
                cursor: pointer;
                span {
                    font-size: 1em;
                    font-family: Pixel;
                    padding: 0 1em;
                }
                
            }
            &:hover, &.active {
                border-bottom: .2em solid #08f;
                a span {color: #08f}
            }
        }
    }
`

//EXPORT
export default Style