import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { motion } from "framer-motion";
import { staggerContainer, popScale } from "../Motion/MotionVariants";

function AboutCard() {
  const activities = [
    "Website Hosting & Cloud Deployment",
    "Technical Writing & Documentation",
    "Web Scraping & Data Extraction",
  ];

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My Name is <span className="purple">Suleman Saeed</span>.
            <br /> I am a graduate with a Bachelor of Science in Software Engineering from the University of Central Punjab. 
            I am proficient in multiple programming languages and frameworks, including React, Next.js, Nuxt (Vue), Laravel, Django, AWS, and the MERN Stack.
            <br />
            <br />
            I am passionate about creating efficient, responsive web applications and excited to contribute my skills to innovative, high-impact projects.
            <br />
            <br />
            Additional capabilities:
          </p>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer(0.1, 0.1)}
            style={{ listStyle: "none", paddingLeft: 0 }}
          >
            {activities.map((act, idx) => (
              <motion.li
                key={idx}
                variants={popScale}
                whileHover={{ x: 6, color: "#1e90ff" }}
                className="about-activity"
                style={{ cursor: "default", transition: "color 0.2s ease" }}
              >
                <ImPointRight style={{ marginRight: "10px", color: "#1e90ff" }} /> {act}
              </motion.li>
            ))}
          </motion.ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
