import React from "react";

import ProjectCard from "./ProjectCard";

//import {FaPlus, FaTag} from "react-icons/lib/fa";

import Kitten from "../assets/images/portfolio/kitten.jpeg";
//import Console from "../assets/images/portfolio/console.jpg";
//import Judah from "../assets/images/portfolio/judah.jpg";
//import IntoTheLight from "../assets/images/portfolio/into-the-light.jpg";
//import Farmerboy from "../assets/images/portfolio/farmerboy.jpg";
//import Girl from "../assets/images/portfolio/girl.jpg";
//import Origami from "../assets/images/portfolio/origami.jpg";
//import Retrocam from "../assets/images/portfolio/retrocam.jpg";
//
//import CoffeeModal from "../assets/images/portfolio/modals/m-coffee.jpg";
//import ConsoleModal from "../assets/images/portfolio/modals/m-console.jpg";
//import JudahModal from "../assets/images/portfolio/modals/m-judah.jpg";
//import IntoTheLightModal from "../assets/images/portfolio/modals/m-intothelight.jpg";
//import FarmerboyModal from "../assets/images/portfolio/modals/m-farmerboy.jpg";
//import GirlModal from "../assets/images/portfolio/modals/m-girl.jpg";
//import OrigamiModal from "../assets/images/portfolio/modals/m-origami.jpg";
//import RetrocamModal from "../assets/images/portfolio/modals/m-retrocam.jpg";

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap" />
            <ProjectCard
              title="Name"
              description="description"
              image={Kitten}
            />
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap" />
            <ProjectCard
              title="Name"
              description="description"
              image={Kitten}
            />
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap" />
            <ProjectCard
              title="Name"
              description="description"
              image={Kitten}
            />
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap" />
            <ProjectCard
              title="Name"
              description="description"
              image={Kitten}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
