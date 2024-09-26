// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'poppins', Oswald`,  // Use the font for headings
    body: `'poppins', Oswald`,     // Use the font for body text
  },
});

export default theme;
