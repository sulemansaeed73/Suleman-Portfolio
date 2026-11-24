import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiLaravel,
  SiDjango,
  SiAmazonaws,
  SiNuxtdotjs,
} from "react-icons/si";
import { staggerContainer, popScale } from "../Motion/MotionVariants";

function Techstack() {
  const techs = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiNuxtdotjs />, name: "Nuxt (Vue)" },
    { icon: <SiAmazonaws />, name: "AWS" },
    { icon: <SiLaravel />, name: "Laravel" },
    { icon: <SiDjango />, name: "Django" },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0.08, 0.1)}
    >
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techs.map((tech, index) => (
          <Col xs={4} md={2} className="tech-icons" key={index} style={{ padding: "10px" }}>
            <motion.div
              variants={popScale}
              whileHover={{
                y: -8,
                scale: 1.12,
                rotate: index % 2 === 0 ? 3 : -3,
                borderColor: "#1e90ff",
                boxShadow: "0 10px 25px rgba(30, 144, 255, 0.45)",
              }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              {tech.icon}
              <p style={{ marginTop: "10px", fontSize: "14px", marginBottom: 0 }}>
                {tech.name}
              </p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Techstack;
