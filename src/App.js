import React, {Component} from "react";

import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Resume />
        <Portfolio />
      </div>
    );
  }
}

export default App;
