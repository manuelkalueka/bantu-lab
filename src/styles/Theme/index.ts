import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  colors: {
    main: "#003366",
    secondary: "#FFA500",
    neutras: {
      white: "#fff",
      lightGray: "#f5f5f5",
      mediumGray: "#ccc",
      darkGray: "#333",
      black: "#000",
      dark: "#343a40",
      danger: "#dc3545",
      warning: "#ffc107",
      success: "#28a745",
      info: "#3e8ed0",
    },
  },
  borderRadius: {
    small: "0.25rem",
    medium: "0.5rem",
    large: "1rem",
    circle: "50%",
  },

  //   Pequeno: 32px de altura, padding 8px 16px, font-size 14px
  // Médio: 40px de altura, padding 12px 24px, font-size 16px
  // Grande: 48px de altura, padding 16px 32px, font-size 18px
  sizes: {
    bodyText: "16px",
  },
  input: {
    height: "2.5rem",
    padding: ["0.625", "0.75rem"],
    font_size: "1rem",
  },
  fonts: {
    main: "Montserrat",
    secondary: "Lato",
  },

  //   Extra pequeno (mobile): < 576px
  // Pequeno (mobile): ≥ 576px
  // Médio (tablet): ≥ 768px
  // Grande (desktop): ≥ 992px
  // Extra grande (large desktop): ≥ 1200px

  modals: {
    small: "18.75rem",
    medium: "31.25rem",
    large: "43.75rem",
  },

  //   Padding: 16px
  // Border-radius: 8px
  // Sombra: 0 4px 8px rgba(0, 0, 0, 0.1)
};

export { Theme };
