import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = ({headline, description}) => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">{headline}</h1>
      <h3>
        {description}
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
