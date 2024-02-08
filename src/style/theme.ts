import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    light: {
      background: "#ffffff",
      textPrimary: "#333333",
      accent: "#27ae60",
      highlight: "#3498db",
      secondary: "#ecf0f1",
    },
    dark: {
      background: "#2c3e50",
      textPrimary: "#ecf0f1",
      accent: "#27ae60",
      highlight: "#3498db",
      secondary: "#34495e",
    },
  },

  cssVarPrefix: "my-app", // prefixo para evitar conflitos com outras variáveis CSS
});

export default theme;
