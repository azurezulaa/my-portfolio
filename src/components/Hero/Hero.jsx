import React from "react";
import styles from "./hero.css";
import CTA from "./CTA";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";

const Hero = () => {
  return (
    <div className="hero">
      <div style={{ zIndex: "2000", position: "absolute", top: "40%" }}>
        <h5>Hello I'm</h5>
        <h1>Zulaa</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
      </div>
      <input type="checkbox" id="day-night" />
      <label for="day-night"></label>
      <div class="content">
        <div class="moon-sun"></div>
        <div class="clouds"></div>
      </div>
    </div>
  );
};

export default Hero;
