import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root { /* custom property */
    --black: #000;
    --green: #1EBE71;
    --white: 	#fff;
    --milk-white: #FCFCFC;
    --light-gray: #F2F2F2;
    --light-gray-2: #E2E2E2;
    --gray: #BEBEBE;
    --dark-gray: #808080;
    --red: #CF3232;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--white);
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font-family: "Poppins", Arial, sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
