import React from "react";
import styles from "./hero.css";
import CTA from "./CTA";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";

const Hero = ({ change, theme }) => {
  return (
    <div className="hero">
      <div
        className="hero-cont"
        style={{ zIndex: "2000", position: "absolute", top: "40%" }}
      >
        <h5 className="hello">Hello I'm</h5>
        <p id="z">Z</p>
        <p id="u">U</p>
        <p id="l">L</p>
        <p id="a">AA</p>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
      </div>
      <input
        onChange={change}
        checked={theme === "light" ? true : false}
        type="checkbox"
        id="day-night"
      />
      <label for="day-night"></label>
      <div class="content">
        <div class="moon-sun"></div>
        <div class="clouds"></div>
      </div>
    </div>
  );
};

export default Hero;
