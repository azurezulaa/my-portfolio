import React from "react";
import styles from "./hero.module.scss";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadSnowPreset } from "tsparticles-preset-snow";

const Hero = () => {
  return (
    <div>
      <video autoPlay loop muted playsInline src="./images/asd.mov"></video>
      <p>asd</p>
    </div>
  );
};

export default Hero;
