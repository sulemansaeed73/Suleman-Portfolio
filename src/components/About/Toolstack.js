import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMicrosoftteams,
} from "react-icons/si";
import { DiGithub } from "react-icons/di";

function Toolstack() {
  const tools = [
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiSlack />, name: "Slack" },
    { icon: <DiGithub />, name: "GitHub" },
    { icon: <SiMicrosoftteams />, name: "Microsoft Teams" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          {tool.icon}
          <p style={{ marginTop: "10px", fontSize: "14px" }}>{tool.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
