import React from "react";
import { Col, Row } from "react-bootstrap";
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
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tech.icon}
          <p style={{ marginTop: "10px", fontSize: "14px" }}>{tech.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

