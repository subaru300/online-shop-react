import { ChakraProvider, theme } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header/>
    <Main/>
    <Footer/>
  </ChakraProvider>
)
