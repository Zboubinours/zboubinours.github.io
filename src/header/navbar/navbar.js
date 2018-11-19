import React from "react";

const Navbar = () => (
  <nav id="nav-wrap">
    <a class="mobile-btn" href="#nav-wrap" title="Show navigation">
      Show navigation
    </a>
    <a class="mobile-btn" href="#" title="Hide navigation">
      Hide navigation
    </a>

    <ul id="nav" class="nav">
      <li class="current">
        <a class="smoothscroll" href="#home">
          Accueil
        </a>
      </li>
      <li>
        <a class="smoothscroll" href="#skills">
          Compétences
        </a>
      </li>
      <li>
        <a class="smoothscroll" href="#projects">
          Projets
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
