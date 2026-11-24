import React from "react";
import Tilt from "react-parallax-tilt";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Aboutcard from "./AboutCard";
import Reveal from "../Motion/Reveal";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  floatLoop,
} from "../Motion/MotionVariants";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", alignItems: "center" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Reveal variants={fadeInLeft}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </Reveal>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "10px", paddingBottom: "50px", textAlign: "center" }}
            className="about-img"
          >
            <Reveal variants={fadeInRight}>
              <motion.div
                variants={floatLoop}
                animate="animate"
                style={{ display: "inline-block" }}
              >
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000}>
                  <img
                    src={require("../../images/MyAvatar.png")}
                    alt="about"
                    className="img-about"
                    style={{
                      borderRadius: "20px",
                      border: "2px solid rgba(30, 144, 255, 0.4)",
                      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5), 0 0 25px rgba(30, 144, 255, 0.3)",
                    }}
                  />
                </Tilt>
              </motion.div>
            </Reveal>
          </Col>
        </Row>

        {/* Skillset Section */}
        <Reveal variants={fadeInUp}>
          <h1 className="project-heading" style={{ marginTop: "40px" }}>
            Professional <strong className="purple">Skillset</strong>
          </h1>
        </Reveal>
        <Techstack />

        {/* Tools Section */}
        <Reveal variants={fadeInUp}>
          <h1 className="project-heading" style={{ marginTop: "40px" }}>
            <strong className="purple">Tools</strong> I Use
          </h1>
        </Reveal>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
