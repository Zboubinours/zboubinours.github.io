import React from "react";
import faker from 'faker';

import SkillsItem from './skills-item/skills-item'

const Skills = () => (
  <section id="skills">
    <div class="row skill">
      <div class="three columns header-col">
        <h1>
          <span>Skills</span>
        </h1>
      </div>

      <div class="nine columns main-col">
          <p>{faker.name.findName()}</p>
        <p>
          {faker.lorem.words(100)}
        </p>

        <div class="bars">
          <ul class="skills">
            <li>
              <SkillsItem name='test' percent='75'/>
            </li>
            <li>
              <span class="bar-expand photoshop" />
              <em>Photoshop</em>
            </li>
            <li>
              <span class="bar-expand illustrator" />
              <em>Illustrator</em>
            </li>
            <li>
              <span class="bar-expand wordpress" />
              <em>Wordpress</em>
            </li>
            <li>
              <span class="bar-expand css" />
              <em>CSS</em>
            </li>
            <li>
              <span class="bar-expand html5" />
              <em>HTML5</em>
            </li>
            <li>
              <span class="bar-expand jquery" />
              <em>jQuery</em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
