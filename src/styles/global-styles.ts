import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Plus Jakarta Sans';
    src: url('../assets/fonts/plus-jakarta-sans/PlusJakartaSans-VariableFont_wght.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../assets/fonts/inter/Inter-VariableFont_slnt,wght.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
  }

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
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

button, input{
  border:0;
  outline:0;
}

button, input, a{
  font-family: ${({ theme }) => theme.fonts.main};
}

html,
body,
#root{
  font-family: ${({ theme }) => theme.fonts.main};
  height: 100%;
  width: 100%;
}
body {
  height: 100vh;
  width: 100vw;
  font-size:${({ theme }) => theme.sizes.bodyText};
  color:${({ theme }) => theme.colors.neutras.dark};
  background-color:${({ theme }) => theme.colors.neutras.smothDark}
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
