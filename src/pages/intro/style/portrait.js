export default `
    align-items: center;
    justify-content: center;
    .content {
        height: fit-content;
        grid-template-rows: repeat(2, min-content);
        .title {
            text-align: center;
        }
        .subtitle {
            font-variant: small-caps;
        }
        .tag {
            color: #08f;
            font-size: 3vw;
            font-family: hind;
            font-variant: small-caps;
            margin: 1vh 0;
            text-align: center;
        }
    }
    
`