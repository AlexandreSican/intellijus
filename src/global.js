import { createGlobalStyle } from "styled-components";
import { FontStyles } from "./fontStyles";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        overflow-x: hidden;
        scroll-behavior: smooth;
            
    }

    body{
        font-family: "Bebas Neue", sans-serif;
        font-weight: 400;
        font-style: normal;
        //background-color: #c3c3c3;  
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @font-face {
        font-family: "Bebas Neue";
        src: url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    }
    }

`