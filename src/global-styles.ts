import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        background-color: black;
        --webkit-font-smoothing: antialiased;
        --moz-osx-font-smoothing: grayscale;
        color: #333333;
        font-size: 16px;
    }

    h1 {
        font-size: 50px;
        line-height: 1.1;
        margin-bottom: 8px;

        @media (max-width: 600px) {
            font-size: 35px;
        }
    }
`;

