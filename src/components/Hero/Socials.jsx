import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://facebook.com" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://telegram.com" target="_blank">
        <FaTelegramPlane />
      </a>
    </div>
  );
};

export default Socials;
