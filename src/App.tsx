import { ChakraProvider } from "@chakra-ui/react";
import theme from "./style/theme";
import AppRouter from "./AppRoutes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <AppRouter></AppRouter>
  </ChakraProvider>
);
