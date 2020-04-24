import Styled from 'styled-components'

export default Styled.footer`
    position: fixed;
    height: 10vh;
    width: 100vw;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .page-slider {
        width: 33%;
        height: 3vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .page {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 3vh;
            width: 3vh;
            cursor: pointer;
            &.active > span {background-color: #fff}
            &:hover > span {background-color: #ccc}
            span {
                display: block;
                height: 1.5vh;
                width: 1.5vh;
                border: .11vh solid #ccc;
                border-radius: 50%;
                transition: background-color .42s ease-in-out;
            }
        }
        .divider {
            height: 0;
            // background-color: #666;
            border-top: .22vh dashed #333;
            width: calc(100% / 3 - 3vh)
        }
    }
`