import React from "react";
import CV from "../../assets/resume.docx";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="hero-btn-download">
        Download CV
      </a>
      <a href="#contact" className="hero-btn-contact">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
