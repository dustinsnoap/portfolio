import Styled from 'styled-components'
import landscape from './landscape'
import portrait from './portrait'
import print from './print'

export default Styled.main`
    @media (orientation: landscape) {
        ${landscape}
    }
    @media (orientation: portrait) {
        ${portrait}
    }
    @media print {
        ${print}
    }
`