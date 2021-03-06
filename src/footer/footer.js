import React from "react";

const Footer = () => (
  <footer>
    <div class="row">
      <div class="twelve columns">
        <ul class="copyright">
          <li>&copy; Copyright 2014 CeeVee</li>
          <li>
            Design by{" "}
            <a title="Styleshout" href="http://www.styleshout.com/">
              Styleshout
            </a>
          </li>
        </ul>
      </div>

      <div id="go-top">
        <a class="smoothscroll" title="Back to Top" href="#home">
          <i class="icon-up-open" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
