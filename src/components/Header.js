import React from "react";

import Navigation from "./Navigation";
import Banner from "./Banner";
import ScrollDown from "./ScrollDown";

const Header = () => (
  <header id="home">
    <Navigation />
    <Banner headline="I'm Rod Guillaume." description="French computer science engineering school student."/>
    <ScrollDown />
  </header>
);

export default Header;
