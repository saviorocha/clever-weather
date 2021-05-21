import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;

    }

    body, input, button {
        font-family: 'Roboto', sans-serif;
    }

    #root {
        margin: 0 auto;
    }


    ::selection {
    color: #2a1a70;
    background: #fff;
    }
`;
