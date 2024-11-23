import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from "react-icons/bs";
import Home3 from "./Home3";
import About from "../About/About";
import WorkExperience from "../Experience/WorkExperience";
// import ResumeNew from "../Resume/ResumeNew";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <div md={7} className="home-header" style={{ flex: 1 }}>
            <h1 className="heading">Hello! </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Adam Jackson</strong>
              </h1>

              <div className="type">
                <Type />
              </div>
              <div className="contact-info">
                <h4 style={{ color: "#70e7f0" }}>Contact me:</h4>
                <p style={{ fontSize: "1.2rem", marginBottom: "0.1rem" }}>
                  <BsFillEnvelopeFill style={{ marginRight: "0.5rem" }} />
                  <a
                    href="mailto:adamJackson12@gmail.com"
                    style={{ textDecoration: "none", color: "#FF00FF" }}
                  >
                    adamJackson12@gmail.com
                  </a>
                </p>
                <p style={{ fontSize: "1.2rem" }}>
                  <BsFillTelephoneFill style={{ marginRight: "0.5rem" }} />
                  <a
                    href="tel:+91 94138 14496"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                  +22 3345-44444
                  </a>
                </p>
              </div>
            </div>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
        <Home2 />
        <About />
        <Home3 />
        <WorkExperience />
        {/* <ResumeNew /> */}
      </Container>
    </section>
  );
}

export default Home;
