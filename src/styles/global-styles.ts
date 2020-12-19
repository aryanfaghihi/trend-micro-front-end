import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './themes/morning';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  @font-face {
    font-family: infoLight;
    src: url('${props => props.theme.fonts.infoLight}');
  }
  @font-face {
    font-family: info;
    src: url('${props => props.theme.fonts.info}');
  }
  @font-face {
    font-family: action;
    src: url('${props => props.theme.fonts.action}');
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: infoLight, Helvetica, Arial, sans-serif;
    background-color:${props => props.theme.colors.background}
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
