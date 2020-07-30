export default `
    .content {
        height: 100%;
        .links {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr 2fr;
            grid-row-gap: 4vh;
            h2 {
                align-self: flex-start;
                font-size: 4vw;
                color: #08f;
                font-family: hind;
                grid-column: span 3;
                text-align: center;
                align-self: end;
            }
            a {
                display: grid;
                grid-template-rows: 7vw min-content;
                grid-row-gap: 2vh;
                justify-items: center;
                &:hover span, &:hover svg {
                    fill: #08f;
                    color: #08f;
                }
                svg {
                    width: 7vw;
                    fill: #ccc;
                    cursor: pointer;
                    transition: fill .22s ease-in-out;
                    &:hover {fill: #08f}
                }
                span {
                    font-size: 2vh;
                    font-family: neue;
                    font-variant: small-caps;
                    transition: color .22s ease-in-out;
                    color: #ccc;
                }
            }
        }
    }
`