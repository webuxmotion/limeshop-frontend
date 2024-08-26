const { createGlobalStyle } = require("styled-components");

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: #eee;
        margin: 0;
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    h1, p {
        margin: 0;
    }
`;