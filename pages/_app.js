import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import AnimCursor from "../components/AnimCursor";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AnimCursor />
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default MyApp;
