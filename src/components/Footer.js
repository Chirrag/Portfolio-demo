import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer text-center">
      <Row>
        <Col className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              {/* <a
                href="#"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="display-6"
              >
                <AiFillGithub />
              </a> */}
            </li>
            <li className="social-icons">
              {/* <a
                href="#"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="display-6"
              >
                <FaLinkedinIn />
              </a> */}
            </li>
            <li className="social-icons">
              {/* <a
                href="#"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="display-6"
              >
                <AiFillInstagram />
              </a> */}
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
