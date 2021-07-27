import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
    }
    html,body{
        height: 100vh;
        background: #c4c4c4;
        scroll-behavior: smooth;
    }
    img{
        width: 100%;
        height: 100%;
    }
`;


export default GlobalStyle;