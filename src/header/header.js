import React from "react";
import Navbar from "./navbar/navbar";
import Banner from "./banner/banner";

const Header = () => (
  <header id="home">
    <Navbar />
    <Banner />

    <p class="scrolldown">
      <a class="smoothscroll" href="#about">
        <i class="icon-down-circle" />
      </a>
    </p>
  </header>
);

export default Header;
