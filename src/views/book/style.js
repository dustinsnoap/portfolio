import Styled from 'styled-components'

const landscape = `
    @media (orientation: landscape) {
        display: flex;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        transition: all 1s;
        position: relative;
    }
`

const portrait = `
    @media (orientation: portrait) {
        width: 100%;
        position: relative;
    }
`

export default Styled.div`
    ${landscape}
    ${portrait}
`