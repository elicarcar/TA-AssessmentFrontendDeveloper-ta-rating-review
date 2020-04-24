import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <section>
        <a href="https://github.com/elicarcar" target="_blank">
          <span className="github-icon">
            <FaGithub size="100" /> <span>Github</span>
          </span>
        </a>
        <a
          herf="https://www.linkedin.com/in/elisabetta-carcar-456a2b188/"
          target="_blank"
        >
          <span className="linkedin-icon">
            <FaLinkedin size="100" /> <span>Linkedin</span>
          </span>
        </a>
      </section>
      <p>This small app is made only for educational purposes.</p>
    </div>
  );
};

export default Footer;
