import React, {Component} from "react";
import Header from "./header/header";
import Skills from "./skills/skills";
import Projects from "./projects/projects";
import Footer from "./footer/footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Skills />
      <Projects />
      <Footer />
      </div>
    );
  }
}

export default App;
