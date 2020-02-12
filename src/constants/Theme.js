import React from "react";
import { ThemeProvider } from "styled-components";



const theme = {
    colors: {
      background: {
        primary: 'yellow',
        secondary: 'green',
        tertiary:'white',
      },
      font: {
        primary: 'black',
        secondary: 'gray',
        tertiary:'black',
      }
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      header:"4.5vw",
      headerSubtitle: "2.5vw",
      normal:"20px",
    },
    fontWeight: {
      normal: 300,
      bold: 700,
    }
  };

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;



