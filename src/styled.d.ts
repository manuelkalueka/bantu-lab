import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      circle: string;
    };
    colors: {
      main: string;
      secondary: string;
      main_dark: string;
      main_light: string;
      neutras: {
        white: string;
        lightGray: string;
        mediumGray: string;
        gray: string;
        darkGray: string;
        smothDark: string;
        black: string;
        dark: string;
        danger: string;
        warning: string;
        success: string;
        info: string;
      };
    };
    sizes: {
      bodyText: string;
    };
    input: {
      height: string;
      padding: string[];
      font_size: string;
    };
    fonts: {
      main: string;
      secondary: string;
      fantasy: string;
    };
    modals: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
