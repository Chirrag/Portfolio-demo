import React from "react";
import { Container } from "react-bootstrap";
import Aboutcard from "./AboutCard";

import Skills from "./Skills";
// import krishna_formal from "../../Assets/Krishna_formal.png";

function About() {
  return (
    <section id="about">
    <Container fluid className="about-section" id="skills">
      <Container>
        <div className="about-content">
          <div className="about-text">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </div>
          <div className="about-img">
            {/* <img src={krishna_formal} alt="about" className="img-fluid" /> */}
          </div>
        </div>
        <Skills />
      </Container>
    </Container>
    </section>
  );
}

export default About;
