import { createGlobalStyle } from "styled-components"; 

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: rgba(255, 255, 255, 1) 
    0% 0% no-repeat padding-box;;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Muli', 'Lato';
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }
`