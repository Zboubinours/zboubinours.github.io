import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        Self assessed level, on how comfortable I am when developing with the
        language.
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand java" />
            <em>Java (Spring Boot, Data)</em>
          </li>
          <li>
            <span className="bar-expand python" />
            <em>Python (Django)</em>
          </li>
          <li>
            <span className="bar-expand angular" />
            <em>Angular</em>
          </li>
          <li>
            <span className="bar-expand reactjs" />
            <em>ReactJS</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
