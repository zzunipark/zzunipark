import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Blinker';
    font-weight: 900;
    font-display: swap;
    src: local('Blinker Black'),
      url('./fonts//Blinker-Black.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Blinker';
    font-weight: 800;
    font-display: swap;
    src: local('Blinker ExtraBold'),
      url('./fonts//Blinker-ExtraBold.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Blinker';
    font-weight: 700;
    font-display: swap;
    src: local('Blinker Bold'),
      url('./fonts//Blinker-Bold.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Blinker';
    font-weight: 600;
    font-display: swap;
    src: local('Blinker SemiBold'),
      url('./fonts//Blinker-SemiBold.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Blinker';
    font-weight: 500;
    font-display: swap;
    src: local('Blinker Medium'),
      url('./fonts//Blinker-Medium.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Blinker';
    font-weight: 400;
    font-display: swap;
    src: local('Blinker Regular'),
      url('./fonts//Blinker-Regular.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Blinker';
    font-weight: 300;
    font-display: swap;
    src: local('Blinker Light'),
      url('./fonts//Blinker-Light.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Blinker';
    font-weight: 200;
    font-display: swap;
    src: local('Blinker ExtraLight'),
      url('./fonts//Blinker-ExtraLight.ttf') format('ttf');
  }

  @font-face {
    font-family: 'Blinker';
    font-weight: 100;
    font-display: swap;
    src: local('Blinker Thin'),
      url('./fonts//Blinker-Thin.ttf') format('ttf');
  }

  * {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Blinker', sans-serif;
  }
`;

export default GlobalStyle;
