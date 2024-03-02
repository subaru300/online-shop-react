import { ChakraProvider, theme } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RouterView from "./components/pages/routes";
import styles from './App.module.css';

export const App = () => (
  <ChakraProvider theme={theme}>
     <div className={styles.mainContainer}>
    <Header/>
    <RouterView/>
    <Footer/>
    </div>
  </ChakraProvider>
)
