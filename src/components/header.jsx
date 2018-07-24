import React from 'react';

const Header = ({logo}) => (
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <a class="navbar-brand" href="/">
        <img alt="website-icon" src={logo} width="40px"/>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="/">Resume<span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="/projects/">Projects</a>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
