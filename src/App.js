import React, { Component } from 'react';
import './App.css';
import Homepage from './Components/Pages/Homepage/Homepage';
import darkTheme from './constants/DarkTheme';

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
