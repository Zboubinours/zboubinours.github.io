import React from "react";

import ProjectCard from "./ProjectCard";

//import {FaPlus, FaTag} from "react-icons/lib/fa";

import Kitten from "../assets/images/portfolio/kitten.jpeg";
import DefaultLogo from "../assets/images/portfolio/code-editor.jpg";
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
              title="zboubinours.github.io"
              description="Portfolio website written in ReactJS"
              image={DefaultLogo}
              link="https://github.com/Zboubinours/zboubinours.github.io"
            />
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap" />
            <ProjectCard
              title="moviesdb-backend"
              description="PRI project - Green IT subject - movies website back end"
              image={DefaultLogo}
              link="https://github.com/Zboubinours/moviesdb-backend"
            />
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap" />
            <ProjectCard
              title="sleep-cycle"
              description="Sleep Cycle web app written in Angular"
              image={DefaultLogo}
              link="https://github.com/Zboubinours/sleep-cycle"
            />
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap" />
            <ProjectCard
              title="war-games"
              description="Resource repository about CRACKMEs, CTFs and binary hacking exercises I did."
              image={DefaultLogo}
              link="https://github.com/Zboubinours/war-games"
            />
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap" />
            <ProjectCard
              title="GhibliApp"
              description="Android app I did with 2 other students. Ghibli movies and characters front end and a quiz game"
              image={DefaultLogo}
              link="https://github.com/Zboubinours/GhibliApp"
            />
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap" />
            <ProjectCard
              title="youll-die-anyway"
              description="Die and retry video game written in C (SDL library) in one weekend"
              image={DefaultLogo}
              link="https://github.com/Zboubinours/youll-die-anyway"
            />
          </div>
          <div className="columns portfolio-item">
            <div className="item-wrap" />
            <ProjectCard
              title="Stellar Crush"
              description="Stellenbosch University, Computer Science E214 Project - 2D video game in Java (STD libs only)"
              image={DefaultLogo}
              link="https://github.com/Zboubinours/stellar_crush"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
