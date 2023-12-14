import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/inter/500.css";
import "@fontsource/lekton";
// import "@fontsource/roboto/600.css";
import "@fontsource/roboto/700.css";

import { ChakraProvider } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Analytics />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
