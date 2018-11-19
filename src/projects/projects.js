import React from "react";

const Projects = () => (
    <section id="projects">

      <div class="row">

        <div class="twelve columns collapsed">

          <h1>Check Out Some of My Works.</h1>

          <div id="portfolio-wrapper" class="bgrid-quarters s-bgrid-thirds cf">

            <div class="columns portfolio-item">
              <div class="item-wrap">

                <a href="#modal-01" title="hello">
                  <img alt="" src="img/kitty.svg"/>
                  <div class="overlay">
                    <div class="portfolio-item-meta">
                      <h5>Coffee</h5>
                      <p>Illustrration</p>
                    </div>
                  </div>
                  <div class="link-icon"><i class="icon-plus"></i></div>
                </a>

              </div>
            </div>


          </div>

        </div>


        <div id="modal-01" class="popup-modal mfp-hide">

          <img class="scale-with-grid" src="images/portfolio/modals/m-coffee.jpg" alt="" />

          <div class="description-box">
            <h4>Coffee Cup</h4>
            <p>Description</p>
            <span class="categories"><i class="fa fa-tag"></i>Branding, Webdesign</span>
          </div>

          <div class="link-box">
            <a href='#'>Details</a>
            <a class="popup-modal-dismiss">Close</a>
          </div>

        </div>

      </div>

    </section>
);

export default Projects;
