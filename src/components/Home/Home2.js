import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiCode, FiServer, FiLayers } from "react-icons/fi";
import Reveal from "../Motion/Reveal";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  popScale,
  staggerContainer,
} from "../Motion/MotionVariants";

const techHighlights = [
  "React",
  "Next.js",
  "Node.js",
  "MERN Stack",
  "Nuxt (Vue)",
  "Laravel",
  "Django",
  "AWS Cloud",
  "PostgreSQL",
  "MongoDB",
];

const competencies = [
  {
    icon: <FiCode />,
    title: "Full-Stack Development",
    desc: "Building modern, responsive, and SEO-optimized web applications with Next.js, React, and Nuxt.",
  },
  {
    icon: <FiServer />,
    title: "Backend & APIs",
    desc: "Developing robust REST & GraphQL APIs using Node.js, Express, NestJS, Laravel, and Django.",
  },
  {
    icon: <FiLayers />,
    title: "Cloud & Databases",
    desc: "Architecting cloud infrastructure on AWS (Lightsail, S3), managing PostgreSQL and MongoDB databases.",
  },
];

const socials = [
  {
    name: "GitHub",
    icon: <AiFillGithub />,
    url: "https://github.com/sulemansaeed",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/sulemansaeed73/",
  },
  {
    name: "Instagram",
    icon: <AiFillInstagram />,
    url: "https://www.instagram.com/habibispeaks",
  },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        {/* Section Header */}
        <Row>
          <Col md={12} style={{ textAlign: "center", marginBottom: "40px" }}>
            <Reveal variants={fadeInUp}>
              <h1 style={{ fontSize: "2.6em", color: "#ffffff", fontWeight: 700 }}>
                ABOUT <span className="purple">ME</span>
              </h1>
              <p style={{ color: "#cde4ff", fontSize: "1.1rem" }}>
                Passionate Software Engineer crafting high-performance digital products
              </p>
            </Reveal>
          </Col>
        </Row>

        {/* Bio & Avatar */}
        <Row style={{ alignItems: "center", justifyContent: "center" }}>
          <Col md={8} className="home-about-description">
            <Reveal variants={fadeInLeft}>
              <p className="home-about-body" style={{ marginTop: 0, paddingTop: 0 }}>
                My Name is <span className="purple" style={{ fontWeight: 600 }}>Suleman Saeed</span>.
                <br />
                <br />
                I hold a <strong>Bachelor of Science in Software Engineering</strong> from the{" "}
                <span className="purple">University of Central Punjab</span>. I specialize in designing and engineering scalable, user-centric web applications and robust cloud backends.
                <br />
                <br />
                My core expertise spans full-stack engineering across modern frameworks and cloud platforms:
              </p>
            </Reveal>

            {/* Interactive Tech Pills with Micro-tilt on hover */}
            <Reveal variants={staggerContainer(0.05, 0.1)}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "20px",
                  marginBottom: "30px",
                }}
              >
                {techHighlights.map((tech, i) => (
                  <motion.span
                    key={tech}
                    variants={popScale}
                    whileHover={{
                      y: -4,
                      rotate: i % 2 === 0 ? 2 : -2,
                      scale: 1.08,
                      borderColor: "#1e90ff",
                      boxShadow: "0 4px 15px rgba(30, 144, 255, 0.35)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 450, damping: 16 }}
                    className="tech-badge-chip"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          </Col>

          {/* Avatar with Tilt and Glow */}
          <Col md={4} className="myAvtar" style={{ paddingTop: "2em" }}>
            <Reveal variants={fadeInRight}>
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000}>
                <div style={{ position: "relative", display: "inline-block" }}>
                  <img
                    src={require("../../images/homepage2.jpg")}
                    className="img-fluid"
                    alt="Suleman Saeed Avatar"
                    style={{
                      borderRadius: "20px",
                      border: "2px solid rgba(30, 144, 255, 0.35)",
                      boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4), 0 0 25px rgba(30, 144, 255, 0.2)",
                    }}
                  />
                </div>
              </Tilt>
            </Reveal>
          </Col>
        </Row>

        {/* Core Competencies Cards (Staggered Reveal with Hover Lift) */}
        <Row style={{ marginTop: "60px", marginBottom: "40px" }}>
          <Col md={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer(0.15, 0.1)}
              className="row"
            >
              {competencies.map((comp, idx) => (
                <Col md={4} key={idx} style={{ marginBottom: "25px" }}>
                  <motion.div
                    variants={popScale}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      borderColor: "rgba(30, 144, 255, 0.6)",
                      boxShadow: "0 14px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(30, 144, 255, 0.25)",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="competency-card"
                  >
                    <div className="competency-icon">{comp.icon}</div>
                    <h3 className="competency-title">{comp.title}</h3>
                    <p className="competency-desc">{comp.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </motion.div>
          </Col>
        </Row>

        {/* Social Links Section */}
        <Row>
          <Col md={12} className="home-about-social">
            <Reveal variants={fadeInUp}>
              <h1 style={{ fontSize: "2rem" }}>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
            </Reveal>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer(0.1, 0.1)}
              className="home-about-social-links"
              style={{ display: "flex", justifyContent: "center", gap: "18px", listStyle: "none", padding: 0 }}
            >
              {socials.map((social) => (
                <motion.li
                  key={social.name}
                  variants={popScale}
                  whileHover={{ y: -6, scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="social-icons"
                  style={{ margin: 0 }}
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-icons"
                    title={social.name}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
