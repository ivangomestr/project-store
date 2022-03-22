import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #ECF1F9;
        --shape: #FFFFFF;
        --blue: #566FFE;        
        --silver: #6F7D95;
    }


   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
   }

   html {
       @media (max-width: 1080px) {
           font-size: 93.75%
       }

       @media (max-width: 1080px) {
           font-size: 87.5%
       }
   }

   body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
   }

   body, input, button {
        font-family: 'Circular Std', sans-serif;
    } 

   h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }

   button {
       cursor: pointer;

       &:hover {
           filter: brightness(0.9)
       }
   }
`