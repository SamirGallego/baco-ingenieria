import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #0C3C59;     /* Azul oscuro */
    --color-secondary:rgb(19, 98, 148);   /* Azul medio */
    --color-accent: #F24C3D;      /* Rojo vibrante */
    --color-light: #F2F2F2;       /* Blanco grisáceo */
    --color-dark: #0D0D0D;        /* Negro profundo */
    
    --font-primary: 'Montserrat', sans-serif;
    --font-secondary: 'Roboto', sans-serif;
    
    --transition-slow: 0.5s ease-in-out;
    --transition-medium: 0.3s ease-in-out;
    --transition-fast: 0.2s ease-in-out;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: var(--font-primary);
    color: var(--color-dark);
    background-color: var(--color-light);
    line-height: 1.6;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-secondary);
    font-weight: 700;
    line-height: 1.2;
  }
`;

export default GlobalStyles; 