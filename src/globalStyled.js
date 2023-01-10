import styled, { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');

  :root {
    --dark-blue-color: hsl(238, 29%, 16%);
    --soft-red-color: hsl(14, 88%, 65%);

    --soft-violet-color: hsl(273, 75%, 66%);
    --soft-blue-color: hsl(240, 73%, 65%);

    --very-dark-grayish-blue-color: hsl(237, 12%, 33%);
    --dark-grayish-blue-color: hsl(240, 6%, 50%);

    --light-grayish-blue-color: hsl(240, 5%, 91%);

  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: red;
    font-size: 12px;
    font-family: 'Kumbh Sans', sans-serif;
  }

  
`