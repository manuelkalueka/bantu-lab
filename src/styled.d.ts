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
      neutras: {
        white: string;
        lightGray: string;
        mediumGray: string;
        darkGray: string;
        black: string;
        dark: string;
        danger:string;
        warning:string;
        success:string;
        info:string;
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
    };
    modals: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
