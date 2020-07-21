export default `
    // background-color: #467937;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
        font-family: inconsolata;
        color: #333;
        font-size: 25vw;
    }
    .subtitle {
        display: flex;
        flex-direction: column;
        .headline {
            color: #fff;
            font-family: hind;
            font-size: 5vw;
        }
        .tags {
            display: flex;
            flex-direction: column;
            .tag {
                font-size: 3vw;
                color: #08f;
                font-family: hind;
                margin: 1vh 0;
                text-align: center;
            }
        }
    }
`