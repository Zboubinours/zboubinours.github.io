import React from "react";

const spanStyle = {
  	width: percent + '%',
};

const SkillsItem = (name, percent) => (
  <div>
  <span class="bar-expand" styles={spanStyle} />
  <em>{name}</em>
  </div>
);

export default SkillsItem;
