export default `
    height: 100vh;
    // width: 100vw;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    // justify-content: center;
    padding: 5vw;
    position: relative;
    h1 {
        font-size: 25vw;
        font-family: orbitron;
        color: #08f;
    }
    .content {
        width: 100%;
        .text {
            p {
                font-family: neue;
                text-align: justify;
                color: #ccc;
                font-size: 4vw;
                margin: 2vh 0;
            }
        }
        .skills {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            span {
                color: #ccc;
                text-align: center;
                font-variant: small-caps;
                font-family: hind;
                font-size: 4vw;
                margin: 2vw;
            }
        }
    }

`