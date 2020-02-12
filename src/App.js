import React, { Component } from 'react';
import './App.css';
import Homepage from './Components/Layouts/Homepage/Homepage';
import Theme from './constants/Theme';

class App extends Component {
  render() {
    return (
      <Theme>
        <div className="App">
          <Homepage/>
        </div>
      </Theme>
    );
  }
}

export default App;
