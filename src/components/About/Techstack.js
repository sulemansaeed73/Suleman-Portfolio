import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiLaravel,
  SiDjango,
} from "react-icons/si";

function Techstack() {
  const techs = [
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiReact />, name: "React" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    // { icon: <SiFirebase />, name: "Firebase" },
    // { icon: <SiPostgresql />, name: "PostgreSQL" },
    // { icon: <DiPython />, name: "Python" },
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
