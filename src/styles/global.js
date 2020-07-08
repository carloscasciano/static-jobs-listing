import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%; 
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    body {
        height: 100%;
        display: flex;

        
        font: 15px 'Spartan', sans-serif;
        font-weight: 300;
        background-color: hsl(180, 52%, 96%);
    }
`;