import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('../assets/fonts/Montserrat/Montserrat-Regular.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato';
    src: url('../assets/fonts/Lato/Lato-Regular.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    box-sizing:border-box;
  }

  html {
  font-size: 100%; /* 16px */
}

img {
  max-width: 100%;
}

a {
  color: inherit;
}

html,
body{
  font-family: ${Theme.fonts.secondary}, sans-serif;
}
body {
  font-size:${Theme.sizes.bodyText};
  color:${Theme.colors.neutras.dark};
  width: 100vw;
  height: 100vh;
}

@media (max-width: 1200px) {
  html {
    font-size: 93.75%; /* 15px */
  }
}

@media (max-width: 992px) {
  html {
    font-size: 87.5%; /* 14px */
  }
}

@media (max-width: 768px) {
  html {
    font-size: 81.25%; /* 13px */
  }
}

@media (max-width: 576px) {
  html {
    font-size: 75%; /* 12px */
  }
}
`;
