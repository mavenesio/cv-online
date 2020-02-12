import React from "react";
import { ThemeProvider } from "styled-components";



const theme = {
    colors: {
      background: {
        primary: 'black',
        secondary: 'gray',
        tertiary:'white',
      },
      font: {
        primary: 'white',
        secondary: 'gray',
        tertiary:'black',
      }
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      subTitle: "2em",
      title: "3em"
    }
  };

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;



