import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMail } from "react-icons/fi";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import SpinningBadge from "../Motion/SpinningBadge";
import Marquee from "../Motion/Marquee";
import {
  fadeInUp,
  fadeInRight,
  staggerContainer,
  buttonSpring,
  floatLoop,
} from "../Motion/MotionVariants";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row style={{ alignItems: "center" }}>
            <Col md={7} className="home-header">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer(0.12, 0.1)}
              >
                {/* Greeting */}
                <motion.h1
                  variants={fadeInUp}
                  style={{ paddingBottom: 15 }}
                  className="heading"
                >
                  Hello{" "}
                  <motion.span
                    className="wave"
                    role="img"
                    aria-labelledby="wave"
                    animate={{ rotate: [0, 20, -10, 20, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      repeatDelay: 2,
                    }}
                    style={{ display: "inline-block", transformOrigin: "70% 70%" }}
                  >
                    👋🏻
                  </motion.span>
                </motion.h1>

                {/* Main Name */}
                <motion.h1 variants={fadeInUp} className="heading-name">
                  I'M
                  <strong className="main-name"> Suleman Saeed</strong>
                </motion.h1>

                {/* Role / Typewriter */}
                <motion.div
                  variants={fadeInUp}
                  className="hero-typewriter-container"
                >
                  <Type />
                </motion.div>

                {/* Interactive CTA Buttons */}
                <motion.div
                  variants={fadeInUp}
                  className="hero-cta-container"
                >
                  <motion.div
                    variants={buttonSpring}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Link
                      to="/project"
                      className="btn-motion-primary"
                    >
                      <span>Explore Projects</span>
                      <FiArrowRight style={{ marginLeft: "8px" }} />
                    </Link>
                  </motion.div>

                  <motion.div
                    variants={buttonSpring}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <Link
                      to="/contact"
                      className="btn-motion-secondary"
                    >
                      <FiMail style={{ marginRight: "8px" }} />
                      <span>Contact Me</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Col>

            {/* Right Hero Image with Floating & Spinning Badge */}
            <Col md={5} className="hero-image-column">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInRight}
                className="hero-image-wrapper"
              >
                <motion.div
                  variants={floatLoop}
                  animate="animate"
                  className="hero-image-floating"
                >
                  <img
                    src={require("../../images/homepage3.jpg")}
                    alt="Suleman Saeed"
                    className="img-fluid hero-animated-img"
                  />

                  {/* Spinning Badge Overlay (as seen on Arsil's portfolio) */}
                  <div className="hero-spinning-badge-wrapper">
                    <SpinningBadge size={110} />
                  </div>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Infinite Tech Marquee Ticker */}
      <Marquee />

      {/* About & Socials */}
      <Home2 />
    </section>
  );
}

export default Home;
