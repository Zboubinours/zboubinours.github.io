import React, {Component} from 'react';
import logo from './img/kitty.svg';
import './App.css';
import Header from './components/header';

import Lorem from './components/lorem';

class App extends Component {
  render() {
    return (
      <div>
        <Header logo={logo}/>
        <div class="container">
          <h1>Hello world</h1>
          <Lorem/>
        </div>
      </div>
    )
  }
}

export default App;
