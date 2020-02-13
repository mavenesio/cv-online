import React, { Component, useState } from 'react';
import './App.css';
import Homepage from './Components/Pages/Homepage/Homepage';
import darkTheme from './constants/DarkTheme';
import lightTheme from './constants/LightTheme';


import { ThemeProvider } from "styled-components";

class App extends Component {
  render() {
    return (
          <ThemeProvider theme={darkTheme}>
            <div className="App">
              <Homepage/>
            </div>
          </ThemeProvider>  
    );
  }
}

export default App;
