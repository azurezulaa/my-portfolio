import React from "react";
import styles from "./about.css";
import ME from "../../assets/14196056.jpg";
import { MdWorkOutline } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <MdWorkOutline className="about_icon" />
              <h5 className="h">Experience</h5>
              <small>+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5 className="h">Clients</h5>
              <small>Worldwide</small>
            </article>
            <article className="about_card">
              <VscProject className="about_icon" />
              <h5 className="h">Experience</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p id="aboutp">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            deserunt placeat tenetur cumque ab consequuntur soluta eligendi,
            nisi ad velit possimus non dolore debitis voluptas reprehenderit est
            blanditiis cum eveniet rerum, sint animi veniam! Suscipit eaque
            vero, earum voluptas consequatur id ducimus temporibus, odit maxime
            sapiente odio cumque, tenetur saepe.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="about_me">
          <img src={ME} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
