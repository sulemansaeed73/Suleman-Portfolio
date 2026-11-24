import React from "react";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMicrosoftteams,
} from "react-icons/si";
import { DiGithub } from "react-icons/di";
import { staggerContainer, popScale } from "../Motion/MotionVariants";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <DiGithub />, name: "GitHub" },
    { icon: <SiMicrosoftteams />, name: "Microsoft Teams" },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0.08, 0.1)}
    >
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {tools.map((tool, index) => (
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
              {tool.icon}
              <p style={{ marginTop: "10px", fontSize: "14px", marginBottom: 0 }}>
                {tool.name}
              </p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

export default Toolstack;
