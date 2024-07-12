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
`;

